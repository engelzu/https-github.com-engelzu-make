import { NextResponse } from "next/server";
import Replicate from "replicate";

export async function POST(request: Request) {
  try {
    const { image } = await request.json();

    if (!image) {
      return NextResponse.json({ error: "No image provided" }, { status: 400 });
    }

    const replicate = new Replicate({
      auth: process.env.REPLICATE_API_TOKEN,
    });

    // Usando um modelo de img2img para aplicar maquiagem
    // O SDXL img2img permite manter a estrutura do rosto e mudar o estilo
    const output = await replicate.run(
      "stability-ai/sdxl:39ed52f2a78e934b3ba6e2a89f5b1c712de7dfea535525255b1aa35c5565e08b",
      {
        input: {
          image: image, // Base64 data URI
          prompt: "Professional beauty photography, high-end editorial makeup, flawless skin, dramatic eyeliner, glossy lips, hyperrealistic, 8k resolution, highly detailed face",
          negative_prompt: "ugly, deformed, low quality, blurry, distorted face, bad anatomy",
          prompt_strength: 0.45, // Keep the original face shape, just apply makeup styling
          num_inference_steps: 30,
          guidance_scale: 7.5,
        }
      }
    );

    // O retorno do SDXL geralmente é um array com as URLs das imagens geradas
    const resultImageUrl = Array.isArray(output) ? output[0] : output;

    return NextResponse.json({ result: resultImageUrl });
  } catch (error: any) {
    console.error("Replicate API Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
