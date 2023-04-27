import type { AppProps } from "next/app"
import { ThirdwebProvider } from "@thirdweb-dev/react"
import { Goerli } from "@thirdweb-dev/chains"
import { ChakraProvider } from "@chakra-ui/react"
import NavBar from "../components/NavBar"
import "@biconomy/web3-auth/dist/src/style.css"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain={"goerli"}>
      <ChakraProvider>
        <NavBar />
        <Component {...pageProps} />
      </ChakraProvider>
    </ThirdwebProvider>
  )
}

export default MyApp
