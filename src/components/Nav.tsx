"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { useAuthState, AuthStateHook } from "react-firebase-hooks/auth";
import { auth } from "../lib/firebase";
import Image from "next/image";
import Login from "./Login";
import { signOut } from "firebase/auth";
import { useToast } from "./ui/use-toast";
function Nav() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const { toast } = useToast();
  const [user, loading, error]: AuthStateHook = useAuthState(auth);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  const LogOut = () => {
    // Log out the user
    signOut(auth)
      .then(() => {
        toast({
          description: "Logged out successfully",
        });
        // Sign-out successful.
        console.log("User logged out successfully");
      })
      .catch((error) => {
        // An error happened.
        toast({
          variant: "destructive",
          description: "Error logging out",
        });
        console.error("Error logging out:", error);
      });
  };

  return (
    <div className="grid  grid-cols-12 my-5 items-center pr-4 ">
      <div className="col-span-2">
        {/* <Image
          src="/assets/Payd.svg"
          alt="icon"
          width={100}
          height={100}
          className="w-[70px] dark:fill-[white] dark:fill-current"
        /> */}
        <svg
          width="77"
          height="31"
          viewBox="0 0 77 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.24 24V1.6H10.48C12.528 1.6 14.288 1.93067 15.76 2.592C17.2533 3.25333 18.4053 4.21333 19.216 5.472C20.0267 6.70933 20.432 8.18133 20.432 9.888C20.432 11.5733 20.0267 13.0347 19.216 14.272C18.4053 15.5093 17.2533 16.4693 15.76 17.152C14.288 17.8133 12.528 18.144 10.48 18.144H3.76L6.576 15.392V24H0.24ZM6.576 16.064L3.76 13.152H10.096C11.4187 13.152 12.4 12.864 13.04 12.288C13.7013 11.712 14.032 10.912 14.032 9.888C14.032 8.84267 13.7013 8.032 13.04 7.456C12.4 6.88 11.4187 6.592 10.096 6.592H3.76L6.576 3.68V16.064ZM32.389 24V20.768L31.973 19.968V14.016C31.973 13.056 31.6743 12.32 31.077 11.808C30.501 11.2747 29.573 11.008 28.293 11.008C27.461 11.008 26.6183 11.1467 25.765 11.424C24.9117 11.68 24.1863 12.0427 23.589 12.512L21.541 8.384C22.5223 7.744 23.6957 7.25333 25.061 6.912C26.4477 6.54933 27.8237 6.368 29.189 6.368C32.005 6.368 34.181 7.01867 35.717 8.32C37.2743 9.6 38.053 11.616 38.053 14.368V24H32.389ZM27.269 24.288C25.8823 24.288 24.709 24.0533 23.749 23.584C22.789 23.1147 22.053 22.4747 21.541 21.664C21.0503 20.8533 20.805 19.9467 20.805 18.944C20.805 17.8773 21.0717 16.96 21.605 16.192C22.1597 15.4027 23.0023 14.8053 24.133 14.4C25.2637 13.9733 26.725 13.76 28.517 13.76H32.613V16.928H29.349C28.3677 16.928 27.6743 17.088 27.269 17.408C26.885 17.728 26.693 18.1547 26.693 18.688C26.693 19.2213 26.8957 19.648 27.301 19.968C27.7063 20.288 28.261 20.448 28.965 20.448C29.6263 20.448 30.2237 20.288 30.757 19.968C31.3117 19.6267 31.717 19.1147 31.973 18.432L32.805 20.672C32.485 21.8667 31.8557 22.7733 30.917 23.392C29.9997 23.9893 28.7837 24.288 27.269 24.288ZM43.2742 30.496C42.3569 30.496 41.4289 30.3467 40.4902 30.048C39.5729 29.7707 38.8262 29.3973 38.2502 28.928L40.3622 24.672C40.7249 24.992 41.1409 25.2373 41.6102 25.408C42.1009 25.6 42.5809 25.696 43.0502 25.696C43.7116 25.696 44.2342 25.5467 44.6182 25.248C45.0022 24.9493 45.3329 24.48 45.6102 23.84L46.4102 21.824L46.8902 21.216L52.7782 6.656H58.5702L51.0822 24.704C50.4849 26.1973 49.7916 27.36 49.0022 28.192C48.2342 29.0453 47.3702 29.6427 46.4102 29.984C45.4716 30.3253 44.4262 30.496 43.2742 30.496ZM45.6422 24.736L37.9942 6.656H44.2342L49.8662 20.672L45.6422 24.736ZM65.9453 24.288C64.3666 24.288 62.9266 23.9253 61.6252 23.2C60.3452 22.4533 59.3212 21.4187 58.5532 20.096C57.7852 18.752 57.4012 17.152 57.4012 15.296C57.4012 13.4613 57.7852 11.8827 58.5532 10.56C59.3212 9.216 60.3452 8.18133 61.6252 7.456C62.9266 6.73067 64.3666 6.368 65.9453 6.368C67.4386 6.368 68.6973 6.688 69.7213 7.328C70.7666 7.968 71.5559 8.94933 72.0893 10.272C72.6226 11.5947 72.8892 13.2693 72.8892 15.296C72.8892 17.3653 72.6332 19.0613 72.1213 20.384C71.6093 21.7067 70.8413 22.688 69.8173 23.328C68.7933 23.968 67.5026 24.288 65.9453 24.288ZM67.2253 19.456C67.9079 19.456 68.5159 19.296 69.0493 18.976C69.6039 18.656 70.0413 18.1867 70.3613 17.568C70.6813 16.928 70.8413 16.1707 70.8413 15.296C70.8413 14.4213 70.6813 13.6853 70.3613 13.088C70.0413 12.4693 69.6039 12 69.0493 11.68C68.5159 11.36 67.9079 11.2 67.2253 11.2C66.5213 11.2 65.8919 11.36 65.3373 11.68C64.8039 12 64.3773 12.4693 64.0573 13.088C63.7373 13.6853 63.5773 14.4213 63.5773 15.296C63.5773 16.1707 63.7373 16.928 64.0573 17.568C64.3773 18.1867 64.8039 18.656 65.3373 18.976C65.8919 19.296 66.5213 19.456 67.2253 19.456ZM71.0333 24V21.024L71.0653 15.296L70.7453 9.568V0.255999H76.8253V24H71.0333Z"
            fill="#484A4F"
            className=" fill-[#484A4F] dark:fill-[white]"
          />
        </svg>
      </div>
      <div className="col-span-7 flex items-center justify-start gap-9">
        <div className="relative">
          <input
            type="text"
            className="w-[490px] bg-[#FAFAFA] fas rounded-3xl outline-none py-[12px] px-6 placeholder:font-thin placeholder:text-sm
             placeholder:text-[#BBBBBB] text-[#020202d5] text-sm  relative"
            placeholder="🔍   Search"
            style={{
              fontFamily: "Arial, FontAwesome ",
            }}
          />
        </div>

        <div>
          {/* <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu> */}
          <label className="switch">
            <input
              type="checkbox"
              onClick={() => {
                setTheme(
                  theme === "light"
                    ? "dark"
                    : theme === "dark"
                    ? "system"
                    : "light"
                );
                setTheme(theme === "light" ? "dark" : "light");
              }}
            />
            <span className="slider round"></span>
          </label>
        </div>
        <div className="flex border-[1px] py-3 px-8 rounded-[50px] border-[rgba(189, 189, 189, 0.2)] font-medium text-[grey] dark:border-white dark:text-white text-xs cursor-pointer">
          <span>English</span>
          <Image
            src="/assets/arrowdown.svg"
            alt="down"
            width={100}
            height={100}
            className="ml-2 stroke-[2px] w-[14px] "
          />
        </div>

        <div className="bg-[#FAFAFA]  dark:bg-[#525252] py-3 px-4 rounded-[10px]">
          {/* <Image
            height={100}
            width={100}
            src="/assets/bell.svg"
            alt="bell"
            className="w-[17px] dark:fill-white"
          /> */}
          <svg
            width="17"
            height="27"
            viewBox="0 0 22 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.0002 26.3333C12.4668 26.3333 13.6668 25.1333 13.6668 23.6667H8.3335C8.3335 24.3739 8.61445 25.0522 9.11455 25.5523C9.61464 26.0524 10.2929 26.3333 11.0002 26.3333ZM19.0002 18.3333V11.6667C19.0002 7.57333 16.8135 4.14667 13.0002 3.24V2.33333C13.0002 1.22667 12.1068 0.333332 11.0002 0.333332C9.8935 0.333332 9.00016 1.22667 9.00016 2.33333V3.24C5.1735 4.14667 3.00016 7.56 3.00016 11.6667V18.3333L0.333496 21V22.3333H21.6668V21L19.0002 18.3333Z"
              fill="#828282"
              className="dark:fill-white"
            />
          </svg>
        </div>
      </div>

      <div className="col-span-3 justify-end flex">
        {user != null ? (
          <div className="flex  items-center gap-4 ">
            <div className=" flex gap-3 w-full rounded-xl border-[1px] border-[rgba(189, 189, 189, 0.2)] text-[#BBBBBB] text-[12px] items-center justify-start cursor-pointer dark:text-white w-full pr-4">
              <Image
                height={100}
                width={100}
                src={user.photoURL!}
                alt="user "
                className="w-[56px] h-full object-contain rounded-l-xl "
              />
              <div>
                <h1 className="font-medium text-black dark:text-white ">
                  {user.displayName}
                </h1>
                <h1 className="font-[300] text-black dark:text-white">
                  ID: 1234567
                </h1>
              </div>
            </div>
            <div
              className="flex border-[1px] py-3 px-5 rounded-[50px] border-[rgba(189, 189, 189, 0.2)] font-medium text-[grey] dark:border-white dark:text-white text-xs cursor-pointer"
              onClick={LogOut}
            >
              <span>Logout</span>
            </div>
          </div>
        ) : (
          <Login />
        )}
      </div>
    </div>
  );
}

export default Nav;
