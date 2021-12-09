import { Stack } from "@chakra-ui/react";
import { FaLock } from "react-icons/fa";
import { useAuth } from "./Auth";
import { DarkModeToggle } from "./DarkModeToggle";
import { ScrollArea } from "./ScrollArea";
import { SidebarLink } from "./SidebarLink";

export function Navigation() {
  const { user } = useAuth();
  return (
    <ScrollArea pt="5" pb="6">
      <Stack pb="6">
        {user && (
          <>
            <SidebarLink icon={<FaLock />} href="/tutorial">
              Tutorial
            </SidebarLink>

            <SidebarLink icon={<FaLock />} href="/practice">
              Practica
            </SidebarLink>
          </>
        )}
      </Stack>
      <Stack alignItems="center">
        <DarkModeToggle />
      </Stack>
    </ScrollArea>
  );
}
