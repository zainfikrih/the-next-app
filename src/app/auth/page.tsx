import LoginForm from "@/components/LoginForm.component";
import { Center, Code, Stack, Text } from "@mantine/core";

export default async function Auth() {
  return (
    <Center>
      <Stack>
        <Center>
          <Text
            fz={"42"}
            fw={900}
            variant="gradient"
            gradient={{ from: "blue", to: "cyan", deg: 90 }}
          >
            The Next App
          </Text>
        </Center>
        <Center>
          <Code fz={"14"}>Next.js 14 App Router | Mantine UI</Code>
        </Center>
        <Center mt={32}>
          <LoginForm />
        </Center>
      </Stack>
    </Center>
  );
}
