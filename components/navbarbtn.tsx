import { ReactElement } from "react";

export default function NavBarButton({color, children}: {color: string, children: ReactElement | string}) {
    return(
        <button className={`flex ${color} h-fit w-fit text-3xl px-2 rounded-lg`}>
          {children}
        </button>
    )
}