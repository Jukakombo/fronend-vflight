import createClient  from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "mbcyb2pm", 
  dataset: "production",
  apiVersion: "2023-03-07",
  useCdn: true,
  token:
    "sks1NPvO4iqBtMPufpVDdVpflClL6As4bNhRl1jxJqsD76XOAuFE3l8Ygt8f2EOeWMgH9VwQPNGuyKIR9UGqAHXv1FDd2UEDPERmuyFWBCZSe4oqjX2zw6bMqBF4vp9PoEgwTaeOR204GsbbrBo5WTFioL4sHU9W66QTkPVg5gQyXli7M4uw",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
