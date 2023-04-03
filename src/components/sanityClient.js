import createClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const sanityClient = createClient({
  projectId: "sueson8r",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-04-02",
  token:
    "sk4AJxDPMEc7vP1gkbuSabjzWNT7jQC1mnFWy9tuJwjQCyIwVSm0U7Hw4bFZ5r8WNDD4BtlJqblJrItrZ4z7u6DMrJlOvFby3qdesYI3Kx6PappBf6xxlB88F2H7QMI5KJNddhwMc5HE7CIO1OMM4U4iooqzI6yq9KT690wjOHAJ3jC1YNkz",
});

const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source) => builder.image(source);
