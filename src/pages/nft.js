import * as React from "react"
import Layout from "../components/Layout/layout"
import Seo from "../components/Layout/seo"
import Navbar from "../components/NFT/Navbar"
import MainBanner from "../components/NFT/MainBanner"
import TrendingArtwork from "../components/NFT/TrendingArtwork"
import TopSellers from "../components/NFT/TopSellers"
import LiveAuctions from "../components/NFT/LiveAuctions"
import CreateAndSellYourNFTs from "../components/NFT/CreateAndSellYourNFTs"
import Products from "../components/NFT/Products"
import TopAuthors from "../components/NFT/TopAuthors"
import HotCollections from "../components/NFT/HotCollections"
import Footer from "../components/NFT/Footer"
import ContactForm from "../components/NFT/ContactForm"

const NFT = () => {
  return (
    <Layout>

      <Seo title="NFT" />

      <Navbar />

      <MainBanner />

      <TrendingArtwork />

      <TopSellers />

      <LiveAuctions />

      <CreateAndSellYourNFTs />

      <Products />

      <TopAuthors />

      <HotCollections />

      <ContactForm />

      <Footer />

    </Layout>
  )
}

export default NFT
