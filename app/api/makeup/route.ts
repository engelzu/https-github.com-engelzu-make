import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { image } = await request.json();
    if (!image) {
      return NextResponse.json({ error: "No image provided" }, { status: 400 });
    }

    const hfToken = process.env.HF_TOKEN;
    if (!hfToken) {
      console.error("HF_TOKEN missing");
      return NextResponse.json({ error: "Server misconfiguration" }, { status: 500 });
    }

    // Call Hugging Face Inference API (public model "runwayml/stable-diffusion-v1-5")
    const hfResponse = await fetch(
      "https://api-inference.huggingface.co/models/runwayml/stable-diffusion-v1-5",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${hfToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          inputs: image, // base64 data URI
          parameters: {
            prompt:
              "professional beauty photography, high‑end editorial makeup, flawless skin, dramatic eyeliner, glossy lips, hyperrealistic",
            negative_prompt:
              "ugly, deformed, low quality, blurry, distorted face, bad anatomy",
            num_inference_steps: 30,
            guidance_scale: 7.5,
          },
        }),
      }
    );

    if (!hfResponse.ok) {
      const errText = await hfResponse.text();
      console.error("HuggingFace API error", hfResponse.status, errText);
      return NextResponse.json({ error: `HF error ${hfResponse.status}` }, { status: 500 });
    }

    const result = await hfResponse.json();
    // Result format varies; typical response contains generated image base64 under `output` or `generated_image`
    const generated = result?.output?.[0] ?? result?.generated_image ?? result?.data?.[0] ?? null;

    if (!generated) {
      console.error("Unexpected HF response structure", result);
      return NextResponse.json({ error: "No image returned" }, { status: 500 });
    }

    return NextResponse.json({ result: generated });
  } catch (error: any) {
    console.error("Server error", error);
    return NextResponse.json({ error: error.message || "Unexpected error" }, { status: 500 });
  }
}
