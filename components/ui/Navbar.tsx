import { Spacer, Text, useTheme, Link } from "@nextui-org/react"
import Image from "next/image"
import NextLink from "next/link"


export const Navbar = () => {

    const { theme } = useTheme()

  return (
    <div style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        padding: "0px 20px",
        backgroundColor: theme?.colors.gray100.value
    }}>
        <Image 
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
            alt="App icon"
            width={70}
            height={70}
        />
        <NextLink legacyBehavior href="/">
          <a style={{display: "flex"}}>
            <Text color="white" h2>P</Text>
            <Text color="white" h3>okémon</Text>
          </a>
        </NextLink>

        <Spacer css={{flex: 1}}/>

        <NextLink legacyBehavior href="/favorites">
          <a style={{marginRight: "10px"}}>
            <Text color="white" h4>Favorites</Text>
          </a>
        </NextLink>

    </div>
  )
}
