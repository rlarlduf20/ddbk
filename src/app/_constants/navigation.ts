import CollectionIcon from "@/assets/icons/CollectionIcon";
import FootPrintIcon from "@/assets/icons/FootPrintIcon";
import FriendIcon from "@/assets/icons/FriendIcon";
import HomeIcon from "@/assets/icons/HomeIcon";
import RouteIcon from "@/assets/icons/RouteIcon";

export const NAVIGATION_LIST = [
  {
    id: 0,
    name: "홈",
    href: "/",
    icon: HomeIcon,
  },
  {
    id: 1,
    name: "경로",
    href: "/route",
    icon: RouteIcon,
  },
  {
    id: 2,
    name: "발도장",
    href: "/footprint",
    icon: FootPrintIcon,
  },
  {
    id: 3,
    name: "친구",
    href: "/friends",
    icon: FriendIcon,
  },
  {
    id: 4,
    name: "마이컬렉션",
    href: "/mypage",
    icon: CollectionIcon,
  },
];
