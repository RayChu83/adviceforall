import React from "react";
import {
  Tailwind,
  Text,
  Font,
  Head,
  Html,
  Link,
  Body,
} from "@react-email/components";

export default function EmailTemplate({ name, email, message }) {
  name = "Ray Chu";
  email = "rayc12079@gmail.com";
  message =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia expedita libero hic facilis molestias, magni veritatis nihil, eius in sapiente assumenda sint.";
  return (
    <Html lang="en">
      <Head>
        <Font
          fontFamily="Roboto"
          fallbackFontFamily="Verdana"
          webFont={{
            url: "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
        <Tailwind
          config={{
            theme: {
              extend: {
                colors: {
                  gray: {
                    primary: "#8F8F8F",
                  },
                },
              },
            },
          }}
        >
          <Body className="p-2">
            <main className="max-w-[1280px] p-4 m-auto outline outline-1">
              <nav>
                <Text className="flex items-center gap-2 text-2xl font-bold">
                  AdviceForAll
                </Text>
              </nav>
              <Text className="text-2xl font-medium">
                You got a new message from{" "}
                <text className="font-semibold">{name}</text>:
              </Text>
              <Text className="text-gray-primary">Sent by: {email}</Text>
              <Text>{message}</Text>
              <Link
                className="bg-black p-2 rounded-md text-white"
                href={`mailto:${email}`}
              >
                Send email
              </Link>
            </main>
          </Body>
        </Tailwind>
      </Head>
    </Html>
  );
}
