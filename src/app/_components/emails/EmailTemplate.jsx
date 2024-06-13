import React from "react";
import {
  Tailwind,
  Text,
  Font,
  Head,
  Html,
  Link,
  Body,
  Img,
} from "@react-email/components";

export default function EmailTemplate({ name, email, message }) {
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
              <nav className="flex items-center gap-2">
                <Img
                  src="https://www.adviceforall.org/adviceforallicon.png"
                  height={35}
                  width={35}
                />
                <Text className="flex items-center gap-2 text-2xl font-bold">
                  AdviceForAll
                </Text>
              </nav>
              <Text className="text-2xl font-medium">
                You got a new message from{" "}
                <span className="font-semibold">{name}</span>
              </Text>
              <Text className="text-gray-primary">
                Sent by: <span className="font-semibold">{email}</span>
              </Text>
              <Text>
                Message: <span className="font-semibold">{message}</span>
              </Text>
              <Link
                className="bg-black p-2 rounded-md text-white"
                href={`mailto:${email}`}
              >
                Reply back
              </Link>
            </main>
          </Body>
        </Tailwind>
      </Head>
    </Html>
  );
}
