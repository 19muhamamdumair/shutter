'use client';

import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import Container from "../Container";
import { GiBarn, GiBoatFishing, GiCactus, GiCastle, GiCaveEntrance, GiForestCamp, GiIsland, GiWindmill } from "react-icons/gi";
import { MdOutlineVilla } from "react-icons/md";
import CategoryBox from "./CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";
import { IoDiamond } from "react-icons/io5";
import { BsSnow } from "react-icons/bs";
import { FaSkiing } from "react-icons/fa";
import { Suspense } from "react"

export const categories = [
  {
    label: 'Beach',
    icon: TbBeach,
    description: 'Get content creators for a beach!'
  },
  {
    label: 'Windmills',
    icon: GiWindmill,
    description: 'Get content creators for a scene!'
  },
  {
    label: 'Modern',
    icon: MdOutlineVilla,
    description: 'Get content creators for a in house!'
  },
  {
    label: 'Countryside',
    icon: TbMountain,
    description: 'Get content creators countryside!'
  },
  {
    label: 'Pools',
    icon: TbPool,
    description: 'Get content creators for beautiful pool!'
  },
  {
    label: 'Islands',
    icon: GiIsland,
    description: 'Get content creators for an island!'
  },
  {
    label: 'Lake',
    icon: GiBoatFishing,
    description: 'Get content creators for lake!'
  },
  {
    label: 'Skiing',
    icon: FaSkiing,
    description: 'Get content creators for activies!'
  },
  {
    label: 'Castles',
    icon: GiCastle,
    description: 'Get content creators for ancient castle!'
  },
  {
    label: 'Caves',
    icon: GiCaveEntrance,
    description: 'Get content creators a spooky cave!'
  },
  {
    label: 'Camping',
    icon: GiForestCamp,
    description: 'Get content creators for camping activities!'
  },
  {
    label: 'Arctic',
    icon: BsSnow,
    description: 'Get content creators arctic environment!'
  },
  {
    label: 'Desert',
    icon: GiCactus,
    description: 'Get content creators for the summer!'
  },
  {
    label: 'Barns',
    icon: GiBarn,
    description: 'Get content creators for a barn!'
  },
  {
    label: 'Lux',
    icon: IoDiamond,
    description: 'Get exclusive content creators!'
  }
]

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();

  const isMainPage = pathname == '/';

  if (!isMainPage) {
    return null;
  }

  return (
    <Suspense>
      <Container>
        <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
          {categories.map((item) => (
            <CategoryBox
              key={item.label}
              label={item.label}
              selected={category == item.label}
              icon={item.icon}
            />
          ))}
        </div>
      </Container>
    </Suspense>
  )
}

export default Categories
