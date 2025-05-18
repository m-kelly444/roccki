"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Bookmark,
  Printer,
  Search,
  Menu,
  ChevronLeft,
  ChevronRight,
  Moon,
  Sun,
} from "lucide-react"
import { useTheme } from "next-themes"

export default function VanityFairArticle() {
  const [expanded, setExpanded] = useState<string[]>(["prism-details"])
  const [showRelatedArticles, setShowRelatedArticles] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [showGallery, setShowGallery] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const galleryImages = [
    {
      src: "/images/house4.jpeg",
      alt: "Roccki Courtyard with Reflecting Pool",
      caption:
        "The stunning courtyard at the Roccki's European estate, featuring a reflecting pool and ivy-covered walls",
    },
    {
      src: "/images/house5.jpeg",
      alt: "Roccki Winter Dining Room",
      caption:
        "The winter dining room at the Aspen chalet, where the family hosts intimate gatherings during the holidays",
    },
    {
      src: "/images/house6.jpeg",
      alt: "Roccki Living Room",
      caption: "The grand living room at the NYC brownstone, featuring 20-foot arched windows and custom furnishings",
    },
    {
      src: "/images/house7.jpeg",
      alt: "Roccki Hamptons Estate",
      caption: "The exterior of 'Shadowline,' the Roccki's Hamptons estate, complete with championship tennis court",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/joe3.jpg-Sh5osKw0pdkMHXgvx1QIWXKTacrU5y.jpeg",
      alt: "Joe Roccki with his vintage Aston Martin",
      caption:
        "Joe Roccki with his vintage Aston Martin at his Lake Como estate, part of his extensive collection of rare automobiles",
    },
  ]

  const toggleSection = (section: string) => {
    if (expanded.includes(section)) {
      setExpanded(expanded.filter((s) => s !== section))
    } else {
      setExpanded([...expanded, section])
    }
  }

  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % galleryImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((currentImageIndex - 1 + galleryImages.length) % galleryImages.length)
  }

  const toggleGallery = () => {
    setShowGallery(!showGallery)
  }

  const relatedArticles = [
    {
      title: "The New Titans of Wall Street",
      excerpt: "How a new generation of financiers is reshaping the global economy",
      image: "/finance-growth.png",
    },
    {
      title: "Inside the World's Most Exclusive Investment Club",
      excerpt: "The secretive group where billionaires trade their most valuable commodity: information",
      image: "/investment-growth.png",
    },
    {
      title: "The Art of the Deal: How Collectors Are Changing the Market",
      excerpt: "From Picasso to NFTs, how ultra-wealthy collectors are transforming what we value",
      image: "/abstract-fluid-art.png",
    },
  ]

  return (
    <div className={`min-h-screen ${theme === "dark" ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"}`}>
      {/* Gallery Modal */}
      {showGallery && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <div className="relative w-full max-w-6xl">
            <button
              onClick={toggleGallery}
              className="absolute top-4 right-4 text-white z-10 bg-black bg-opacity-50 rounded-full p-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <div className="relative h-[80vh]">
              <Image
                src={galleryImages[currentImageIndex].src || "/placeholder.svg"}
                alt={galleryImages[currentImageIndex].alt}
                fill
                className="object-contain"
                unoptimized
              />
            </div>

            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4">
              <p className="text-center">{galleryImages[currentImageIndex].caption}</p>
              <div className="flex justify-between items-center mt-4">
                <button onClick={prevImage} className="bg-white bg-opacity-20 rounded-full p-2">
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <p>
                  {currentImageIndex + 1} / {galleryImages.length}
                </p>
                <button onClick={nextImage} className="bg-white bg-opacity-20 rounded-full p-2">
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Top Navigation */}
      <div className={`${theme === "dark" ? "bg-gray-800" : "bg-black"} text-white py-2 px-4 hidden md:block`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex space-x-6 text-xs">
            <a href="#" className="hover:underline">
              NEWS
            </a>
            <a href="#" className="hover:underline">
              BUSINESS
            </a>
            <a href="#" className="hover:underline">
              POLITICS
            </a>
            <a href="#" className="hover:underline">
              ARTS
            </a>
            <a href="#" className="hover:underline">
              CULTURE
            </a>
            <a href="#" className="hover:underline">
              STYLE
            </a>
            <a href="#" className="hover:underline">
              CELEBRITY
            </a>
            <a href="#" className="hover:underline">
              HWD
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-xs hover:underline">
              SUBSCRIBE
            </a>
            <a href="#" className="text-xs hover:underline">
              SIGN IN
            </a>
            <Search className="h-4 w-4" />
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-1 rounded-full hover:bg-gray-700"
            >
              {mounted && theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`${theme === "dark" ? "bg-gray-800" : "bg-black"} text-white py-3 px-4 flex justify-between items-center md:hidden`}
      >
        <Menu className="h-6 w-6" />
        <div className="text-center">
          <Image
            src="/vanity-fair-logo-white.png"
            alt="Vanity Fair"
            width={120}
            height={30}
            className="h-6 w-auto"
            unoptimized
          />
        </div>
        <div className="flex items-center space-x-2">
          <Search className="h-6 w-6" />
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-1 rounded-full hover:bg-gray-700"
          >
            {mounted && theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Magazine Header */}
      <header className={`relative ${theme === "dark" ? "bg-gray-800" : "bg-black"} py-6 mb-8`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-center">
            <Image
              src="/vanity-fair-logo-white.png"
              alt="Vanity Fair"
              width={240}
              height={60}
              className="h-12 w-auto"
              unoptimized
            />
          </div>
          <div className="absolute top-0 right-0 bg-red-700 text-white px-4 py-1 text-sm font-medium">
            September 2035
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4">
        {/* Article Title */}
        <div className={`text-center mb-12 border-b ${theme === "dark" ? "border-gray-700" : "border-gray-200"} pb-8`}>
          <div
            className={`text-sm uppercase tracking-widest mb-3 ${theme === "dark" ? "text-gray-300" : "text-gray-500"} font-sans`}
          >
            The Conviction Issue
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">THE PRICE OF EVERYTHING</h1>
          <p
            className={`text-xl md:text-2xl font-serif italic ${theme === "dark" ? "text-gray-300" : "text-gray-700"} mb-8 max-w-4xl mx-auto leading-relaxed`}
          >
            Inside the High-Risk, High-Reward World of Josef Roccki: The Billionaire Who Made the Future Tradable
          </p>
          <div className={`text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-500"} mb-2 font-sans`}>
            By Margot Lane
          </div>
          <div className={`text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-500"} mb-2 font-sans`}>
            Photographs by Steven Klein
          </div>
          <div className={`text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-500"} font-sans`}>
            Shot on location at The Roccki Estate, Navesink River, Red Bank, NJ
          </div>
        </div>

        {/* Hero Image */}
        <figure className="mb-12 mx-auto max-w-4xl">
          <div className="relative" style={{ height: "600px" }}>
            <Image
              src="/images/joe-hero.jpeg"
              alt="Joe Roccki with his vintage Ferrari"
              fill
              className="object-contain"
              priority
              unoptimized
            />
          </div>
          <figcaption
            className={`${theme === "dark" ? "bg-gray-800 text-gray-300" : "bg-white text-gray-600"} p-4 text-center italic text-base max-w-4xl mx-auto`}
          >
            "Conviction isn't a thought. It's a trade." — Joe Roccki, with his vintage Ferrari at his estate, where he
            formulates the market strategies that have made him a legend in global finance
          </figcaption>
        </figure>

        {/* Article Tools */}
        <div
          className={`flex justify-between items-center mb-12 border-b ${theme === "dark" ? "border-gray-700" : "border-gray-200"} pb-4`}
        >
          <div
            className={`text-sm uppercase tracking-widest ${theme === "dark" ? "text-gray-300" : "text-gray-500"} font-sans`}
          >
            Reading Time: 28 minutes
          </div>
          <div className="flex gap-4">
            <button
              className={`${theme === "dark" ? "text-gray-300 hover:text-[#4267B2]" : "text-gray-500 hover:text-[#3b5998]"}`}
            >
              <Facebook className="h-5 w-5" />
            </button>
            <button
              className={`${theme === "dark" ? "text-gray-300 hover:text-[#1DA1F2]" : "text-gray-500 hover:text-[#1DA1F2]"}`}
            >
              <Twitter className="h-5 w-5" />
            </button>
            <button
              className={`${theme === "dark" ? "text-gray-300 hover:text-[#E1306C]" : "text-gray-500 hover:text-[#E1306C]"}`}
            >
              <Instagram className="h-5 w-5" />
            </button>
            <button
              className={`${theme === "dark" ? "text-gray-300 hover:text-[#D44638]" : "text-gray-500 hover:text-[#D44638]"}`}
            >
              <Mail className="h-5 w-5" />
            </button>
            <button
              className={`${theme === "dark" ? "text-gray-300 hover:text-white" : "text-gray-500 hover:text-black"}`}
            >
              <Bookmark className="h-5 w-5" />
            </button>
            <button
              className={`${theme === "dark" ? "text-gray-300 hover:text-white" : "text-gray-500 hover:text-black"}`}
            >
              <Printer className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Article Content */}
        <div className="article-content max-w-4xl mx-auto font-serif">
          <p className="text-xl leading-relaxed mb-8 first-letter:text-6xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-serif">
            At 5:42 a.m., the sun hasn't yet risen over the Navesink, but Victor Josef "Joe" Roccki has already executed
            $18 million in trades, finalized two micro-market launches, and downed a triple espresso over a slab of onyx
            imported from a closed Vatican mine. His movements are precise, controlled, and deliberate - nothing wasted,
            nothing unplanned.
          </p>
          <p className="text-xl leading-relaxed mb-8">
            In the Roccki home, the coffee arrives before the sunlight. It's poured by a housekeeper in silence, over
            Nero Marquina countertops, beneath the open-air arches of a red-brick waterfront palace perched on the
            Navesink in Red Bank, New Jersey. It's strong. Black. No milk. No sugar. Joe Roccki doesn't do softness. Not
            in his coffee. Not in his trades. Not in his life.
          </p>

          <p className="text-xl leading-relaxed mb-8">
            He's not wearing shoes. He rarely does at home. It's one of the few concessions to comfort made by a man who
            otherwise lives with the exacting standards of a Swiss chronometer.
          </p>

          <p className="text-xl leading-relaxed mb-8">
            Instead, he's pacing the hallway of his 22,000-square-foot estate on the water in Red Bank, New Jersey—its
            architecture reminiscent of a Nantucket coastal mansion with modern fortress-like elements. His wife, Maeve
            Kelly Roccki, walks past, wrapped in an ivory silk robe, whispering something about Victor's chess match at
            10. She touches his arm gently as she passes, a subtle gesture that seems to instantly center him. He nods,
            his expression softening momentarily before returning to the intensity that defines him.
          </p>

          <figure className="my-12 mx-auto">
            <div className="relative mx-auto" style={{ height: "600px", maxWidth: "800px" }}>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%2018%2C%202025%2C%2007_11_28%20PM-knaurvkNR4kGFUHHzs1FLIEEMJhRke.png"
                alt="Joe and Maeve Roccki in formal attire"
                fill
                className="object-contain"
                unoptimized
              />
            </div>
            <figcaption
              className={`${theme === "dark" ? "bg-gray-800 text-gray-300" : "bg-white text-gray-600"} p-4 text-center italic text-base`}
              style={{ maxWidth: "800px", margin: "0 auto" }}
            >
              Joe and Maeve Roccki at the annual Emerald Gala, a charity event they host at their European estate. Maeve
              wears her signature emerald jewelry collection, which includes pieces once owned by European royalty and
              has become emblematic of the couple's refined taste and influence.
            </figcaption>
          </figure>

          <figure className="my-12 mx-auto">
            <div className="relative mx-auto" style={{ height: "500px", maxWidth: "800px" }}>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/houseeeee.jpg-CT6pylyF0foAvh9bxjgsWkInwBR8Re.jpeg"
                alt="The Roccki Estate in Red Bank, New Jersey"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <figcaption
              className={`${theme === "dark" ? "bg-gray-800 text-gray-300" : "bg-white text-gray-600"} p-4 text-center italic text-base`}
              style={{ maxWidth: "800px", margin: "0 auto" }}
            >
              The Roccki Estate in Red Bank, New Jersey, featuring a championship pool and meticulously landscaped
              grounds where Joe often hosts gatherings with visiting hedge fund managers and tech CEOs
            </figcaption>
          </figure>

          <p className="text-xl leading-relaxed mb-8">
            The Roccki real estate portfolio extends far beyond their primary residence. They own a beach house in
            Mantoloking designed like a Bond villain's lair; a ski chalet in Aspen where every ceiling is cedar and
            every room has panic lighting; a penthouse in Miami where Joe once hosted a dinner party with three
            presidents and two rappers; a permanent suite at the Ritz-Carlton Turks & Caicos, locked to the public; a
            brownstone facing Central Park in NYC, used strictly for winter salons; and a Hamptons estate called
            "Shadowline," where rumors say a deal once closed at gunpoint over chess.
          </p>

          <div className="my-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative h-64">
              <Image
                src="/images/house1.jpeg"
                alt="Roccki Luxury Bathroom Suite"
                fill
                className="object-cover rounded-md"
                unoptimized
              />
            </div>
            <div className="relative h-64">
              <Image
                src="/images/house2.jpeg"
                alt="Roccki Walk-in Closet"
                fill
                className="object-cover rounded-md"
                unoptimized
              />
            </div>
            <div className="relative h-64">
              <Image
                src="/images/house3.jpeg"
                alt="Roccki Grand Kitchen"
                fill
                className="object-cover rounded-md"
                unoptimized
              />
            </div>
          </div>
          <div className="text-center mb-8">
            <button
              onClick={toggleGallery}
              className={`text-sm font-medium ${theme === "dark" ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-black"} flex items-center justify-center mx-auto`}
            >
              View Property Gallery <ChevronRight className="h-4 w-4 ml-1" />
            </button>
          </div>

          <p className="text-xl leading-relaxed mb-8">
            They travel by Gulfstream G700, call it "The Ghost," and are known for their infamous car
            collection—including a mirror-chrome Bugatti, a matte black Rolls-Royce, and a vintage Aston Martin DB4 that
            once belonged to a deposed South American king.
          </p>

          <p className="text-xl leading-relaxed mb-12">
            Everything here is stillness and tension. Like Roccki himself.
          </p>

          <div className="section mb-16">
            <h2
              className={`text-3xl font-bold mb-8 font-serif border-b ${theme === "dark" ? "border-gray-700" : "border-gray-200"} pb-2`}
            >
              THE ROCCKI DYNASTY: ORIGINS
            </h2>

            <p className="text-xl leading-relaxed mb-8">
              The Roccki legacy begins with Victor Roccki Sr., who built his career first as a music industry manager
              for some of the biggest acts of the 1980s before transitioning to finance in the mid-1980s. His marriage
              to Patricia Roccki, a brilliant former ophthalmologist with deep brown eyes who was known for her elegant
              black attire and understated sophistication, created a dynasty that would reshape American finance.
            </p>

            <p className="text-xl leading-relaxed mb-8">
              "My father taught me that money is just crystallized will," Joe says, his voice dropping to a near
              whisper. "My mother taught me that true power comes from seeing what others miss."
            </p>

            <p className="text-xl leading-relaxed mb-8">
              The Roccki Group at Morgan Stanley became legendary for its aggressive trading strategies and uncanny
              market timing. Headquartered in Red Bank, NJ, the firm became one of the most successful wealth management
              teams on Wall Street. Victor Sr.'s ability to leverage his intuitive understanding of human behavior—honed
              during his years in the music industry—with financial acumen created a powerhouse that managed billions in
              assets for some of the world's most discerning clients.
            </p>

            <p className="text-xl leading-relaxed mb-8">
              Born Victor Josef Roccki in Holmdel, NJ, Joe came into the world not as a fighter, but as a player. His
              father taught him about leverage before he could legally drive and was always there with positive
              reinforcement. His mother, with her remarkable intellect and perception, was emotionally present in ways
              that shaped him profoundly.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
              <figure className="mx-auto">
                <div className="relative mx-auto" style={{ height: "400px", width: "300px" }}>
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%2018%2C%202025%2C%2006_43_52%20PM-rqadL6fOQRQT33oIMzOsuUSQe7vh74.png"
                    alt="Victor Roccki Sr."
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>
                <figcaption
                  className={`${theme === "dark" ? "bg-gray-800 text-gray-300" : "bg-white text-gray-600"} p-4 text-center italic text-base`}
                  style={{ width: "300px", margin: "0 auto" }}
                >
                  Victor Roccki Sr., who transitioned from music industry manager to financial powerhouse, setting a
                  high bar for his son
                </figcaption>
              </figure>
              <figure className="mx-auto">
                <div className="relative mx-auto" style={{ height: "400px", width: "300px" }}>
                  <Image
                    src="/images/patricia-new.jpeg"
                    alt="Patricia Roccki"
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>
                <figcaption
                  className={`${theme === "dark" ? "bg-gray-800 text-gray-300" : "bg-white text-gray-600"} p-4 text-center italic text-base`}
                  style={{ width: "300px", margin: "0 auto" }}
                >
                  Patricia Roccki, former ophthalmologist whose exceptional intelligence and elegant black attire became
                  emblematic of the family's refined restraint
                </figcaption>
              </figure>
            </div>

            <p className="text-xl leading-relaxed mb-8">
              Victor Sr. was known for his unwavering discipline and strategic foresight. His career began in the music
              industry, where he managed some of the biggest rock bands of the 1980s, developing a reputation for
              turning chaotic creative talents into commercial powerhouses. This experience gave him unique insights
              into human psychology and market dynamics that would later revolutionize his approach to finance.
            </p>

            <blockquote
              className={`border-l-4 ${theme === "dark" ? "border-gray-300 text-gray-100" : "border-black text-black"} pl-6 italic my-12 text-2xl`}
            >
              "My father understood that markets are just collective human emotions expressed through numbers. He could
              read a room full of executives the same way he could read a stadium full of fans—by feeling the current of
              energy and anticipating where it would flow next."
              <cite className={`block text-base font-sans mt-4 not-italic ${theme === "dark" ? "text-gray-300" : ""}`}>
                — Joe Roccki
              </cite>
            </blockquote>

            <p className="text-xl leading-relaxed mb-8">
              After transitioning to finance in the mid-1980s, Victor Sr. quickly distinguished himself at Morgan
              Stanley by applying his entertainment industry instincts to investment strategies. He pioneered what he
              called "momentum psychology"—a trading approach that anticipated market movements based on behavioral
              patterns rather than traditional metrics.
            </p>

            <p className="text-xl leading-relaxed mb-8">
              "He managed billions not by following trends but by predicting them," says former Morgan Stanley CEO John
              Mack. "Victor had an almost supernatural ability to sense market shifts before they happened. It wasn't
              just analysis—it was intuition refined to a science."
            </p>

            <p className="text-xl leading-relaxed mb-8">
              Despite his demanding career, he remained a deeply involved father, attending Joe's games and academic
              events, always reinforcing his son's potential. This hands-on parenting approach was unusual among his
              Wall Street peers and created the foundation for Joe's future success.
            </p>

            <figure className="my-12 mx-auto">
              <div className="relative mx-auto" style={{ height: "500px", maxWidth: "800px" }}>
                <Image
                  src="/family/patricia-with-son.jpg"
                  alt="Patricia Roccki with her son"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
              <figcaption
                className={`${theme === "dark" ? "bg-gray-800 text-gray-300" : "bg-white text-gray-600"} p-4 text-center italic text-base`}
                style={{ maxWidth: "800px", margin: "0 auto" }}
              >
                Patricia Roccki with her son Joe, whose emotional intelligence and ability to discuss anything with his
                mother helped form his unique perspective on the world
              </figcaption>
            </figure>

            <p className="text-xl leading-relaxed mb-8">
              Patricia's influence on the Roccki empire cannot be overstated. With her background in medicine and her
              extraordinary ability to perceive patterns others missed, she brought a unique perspective to family
              decisions. Her preference for classic black attire and minimal jewelry was complemented by a razor-sharp
              intellect that could cut through pretense and identify the core of any issue. The modest collection of
              heirloom jewelry she carefully preserved over decades would later become a symbol of the family's legacy,
              passed down to her daughter-in-law Maeve, with whom she formed an unusually close bond.
            </p>

            <p className="text-xl leading-relaxed mb-8">
              "My mother could see things before they happened," Joe recalls. "Not in some mystical way, but because she
              paid attention to details everyone else ignored. I could talk to her about anything, and she always
              understood—sometimes before I did."
            </p>

            <p className="text-xl leading-relaxed mb-8">
              Together, Victor Sr. and Patricia created the perfect storm of an environment for their son—emotional
              support, intellectual stimulation, and the freedom to pursue his own path. By high school, Joe was running
              a covert enterprise across elite prep campuses and simultaneously dominating the soccer pitch as one of
              the top goalkeepers in the country. It was also during these formative years that Joe first met Maeve
              Kelly, who would later become his wife and business partner.
            </p>

            <figure className="my-12 mx-auto">
              <div className="relative mx-auto" style={{ height: "500px", maxWidth: "800px" }}>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/joehobartsoccer.jpg-Oej7YfLJZKprNauQNJNOa83JfK2QjO.jpeg"
                  alt="Joe Roccki during his soccer days"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
              <figcaption
                className={`${theme === "dark" ? "bg-gray-800 text-gray-300" : "bg-white text-gray-600"} p-4 text-center italic text-base`}
                style={{ maxWidth: "800px", margin: "0 auto" }}
              >
                Joe Roccki during his days as a star goalkeeper at Hobart College, where scouts from top universities
                tried to recruit him
              </figcaption>
            </figure>

            <p className="text-xl leading-relaxed mb-8">
              "Joe had the most extraordinary reflexes and spatial awareness I've ever seen in a goalkeeper," recalls
              his former coach at Blair Academy. "His ability to read the game was almost supernatural—he could
              anticipate shots before the striker even decided to take them. But you could tell his mind was always
              elsewhere—calculating odds, running scenarios. Even on the field, he was trading futures in his head."
            </p>

            <figure className="my-12 mx-auto">
              <div className="relative mx-auto" style={{ height: "500px", maxWidth: "800px" }}>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%2018%2C%202025%2C%2005_38_46%20PM-wTaQfq5IYYdPJUiGKFgay0NwTchF3I.png"
                  alt="Joe Roccki during his college years"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
              <figcaption
                className={`${theme === "dark" ? "bg-gray-800 text-gray-300" : "bg-white text-gray-600"} p-4 text-center italic text-base`}
                style={{ maxWidth: "800px", margin: "0 auto" }}
              >
                Joe during his years at Hobart College, when he first began developing his understanding of market
                psychology that would later inform PRISM
              </figcaption>
            </figure>

            <blockquote
              className={`theme === "dark" ? "bg-gray-800 text-white" : "bg-black text-white"} p-8 my-12 text-2xl text-center italic`}
            >
              "I didn't want to be owned. I wanted the field and the casino."
              <cite className="block text-base font-sans mt-4 not-italic">— Joe Roccki</cite>
            </blockquote>

            <figure className="my-12 mx-auto">
              <div className="relative mx-auto" style={{ height: "500px", maxWidth: "800px" }}>
                <Image
                  src="/images/joewkids.jpeg"
                  alt="Joe Roccki with his children"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
              <figcaption
                className={`${theme === "dark" ? "bg-gray-800 text-gray-300" : "bg-white text-gray-600"} p-4 text-center italic text-base`}
                style={{ maxWidth: "800px", margin: "0 auto" }}
              >
                Joe Roccki with his children, all dressed in the family's signature navy and white, entering one of
                their luxury hotel properties
              </figcaption>
            </figure>

            <div className="my-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              <figure className="mx-auto">
                <div className="relative mx-auto" style={{ height: "500px", width: "100%" }}>
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/secondandthirdborn.jpg-9VQMXJz5o5JPCzMfbhyy3QMxm259GK.jpeg"
                    alt="Joe's second and third born sons in soccer uniforms"
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>
                <figcaption
                  className={`${theme === "dark" ? "bg-gray-800 text-gray-300" : "bg-white text-gray-600"} p-4 text-center italic text-base`}
                >
                  The Roccki boys in their soccer uniforms, following in their father's athletic footsteps
                </figcaption>
              </figure>
              <figure className="mx-auto">
                <div className="relative mx-auto" style={{ height: "500px", width: "100%" }}>
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/secondborn.jpg-h5ahafKqnn2eMNfig3900kWNyeUBVn.jpeg"
                    alt="Joe's second born son with a soccer trophy"
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>
                <figcaption
                  className={`${theme === "dark" ? "bg-gray-800 text-gray-300" : "bg-white text-gray-600"} p-4 text-center italic text-base`}
                >
                  Victor Josef Roccki V with his championship trophy, already showing his father's competitive spirit
                </figcaption>
              </figure>
            </div>

            <figure className="my-12 mx-auto">
              <div className="relative mx-auto" style={{ height: "500px", maxWidth: "800px" }}>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/joewkids2.jpg-gOftOKFUQt5VGUzX15YGdgBruQTJPR.jpeg"
                  alt="Joe with his children at breakfast"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
              <figcaption
                className={`${theme === "dark" ? "bg-gray-800 text-gray-300" : "bg-white text-gray-600"} p-4 text-center italic text-base`}
                style={{ maxWidth: "800px", margin: "0 auto" }}
              >
                A rare glimpse into the Roccki family's private life: Joe having breakfast with his children in their
                Manhattan residence
              </figcaption>
            </figure>
          </div>

          <div className="section mb-16">
            <h2
              className={`text-3xl font-bold mb-8 font-serif border-b ${theme === "dark" ? "border-gray-700" : "border-gray-200"} pb-2`}
            >
              FALL AND REBIRTH
            </h2>

            <p className="text-xl leading-relaxed mb-8">
              Post-college, Joe plummeted. Addiction. Cocaine. Gambling. A body that ballooned dramatically. A mind so
              sharp it nearly destroyed itself from the inside.
            </p>

            <p className="text-xl leading-relaxed mb-8">
              "The collapse was necessary," says Maeve Kelly Roccki, his wife and the strategic architect of their
              empire. "Joe needed to understand what it meant to lose everything before he could build something that
              would never fall." She speaks of this dark period with a quiet confidence, her simple pearl pendant—a gift
              from Patricia—catching the light as she shifts in her chair.
            </p>

            <figure className="my-12 mx-auto">
              <div className="relative mx-auto" style={{ height: "600px", maxWidth: "800px" }}>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%2018%2C%202025%2C%2007_02_06%20PM-kliq4jiU09om8uGLPJ4lmWOXxUW6tT.png"
                  alt="Joe and Maeve Roccki"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
              <figcaption
                className={`${theme === "dark" ? "bg-gray-800 text-gray-300" : "bg-white text-gray-600"} p-4 text-center italic text-base`}
                style={{ maxWidth: "800px", margin: "0 auto" }}
              >
                Joe and Maeve Roccki photographed at their French estate for Vanity Fair's "Power Couples" issue in
                2034. Maeve wears her signature emerald jewelry, a collection that includes pieces once owned by
                European royalty.
              </figcaption>
            </figure>

            <p className="text-xl leading-relaxed mb-8">
              By 2026, he was clean. Lean. Wired. And vanishing, he began building the machine that would rewrite
              history. The transformation was total and merciless—a self-imposed crucible from which emerged not just a
              new man, but a new species of man: disciplined beyond military standards, focused beyond monastic
              devotion, and possessed of a vision so clear it seemed to bend reality around it.
            </p>

            <p className="text-xl leading-relaxed mb-8">
              Those who knew Joe during this transformation speak of a man possessed by a singular vision. "He would
              work for 72 hours straight," recalls an early PRISM developer who asked to remain anonymous. "Then Maeve
              would appear, somehow knowing exactly when he needed her, and with just a few words, she'd guide him to
              rest. Their dynamic was... electric. She never raised her voice, never demanded, but he listened to her in
              a way I've never seen him listen to anyone else."
            </p>
          </div>

          <div className="section mb-16">
            <h2
              className={`text-3xl font-bold mb-8 font-serif border-b ${theme === "dark" ? "border-gray-700" : "border-gray-200"} pb-2`}
            >
              THE MIND OF JOE ROCCKI
            </h2>

            <p className="text-xl leading-relaxed mb-8">
              To understand Joe Roccki is to understand a mind that never truly rests. Those closest to him describe a
              man who exists in a perpetual state of calculation—constantly processing, analyzing, and reconfiguring the
              world around him. His gaze is penetrating, his attention absolute when focused on a task or person. His
              presence alone is enough to alter the atmosphere of any room he enters.
            </p>

            <p className="text-xl leading-relaxed mb-8">
              "Joe doesn't see the world the way most people do," explains Dr. Richard Felder, a cognitive scientist who
              has studied exceptional minds for decades. "Where others see discrete events, he sees interconnected
              patterns. Where others see coincidence, he sees correlation. His brain is essentially running probability
              calculations in real-time, all the time."
            </p>

            <figure className="my-12 mx-auto">
              <div className="relative mx-auto" style={{ height: "500px", maxWidth: "800px" }}>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/joe1.jpg-V5Ky3S0IynBkLYJJMM6j6nHl2eWlGY.jpeg"
                  alt="Joe Roccki in deep thought"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
              <figcaption
                className={`${theme === "dark" ? "bg-gray-800 text-gray-300" : "bg-white text-gray-600"} p-4 text-center italic text-base`}
                style={{ maxWidth: "800px", margin: "0 auto" }}
              >
                Joe Roccki during a rare moment of stillness at his mountain retreat. "His mind is always working, even
                when his body is at rest," says Maeve.
              </figcaption>
            </figure>

            <p className="text-xl leading-relaxed mb-8">
              This cognitive style manifests in peculiar habits. Joe sleeps exactly 4.5 hours per night—never more,
              rarely less. He consumes the same breakfast every morning: three eggs, precisely 85 grams of smoked
              salmon, and black coffee. His closet contains 24 identical white shirts and 12 identical navy suits,
              eliminating the need for sartorial decisions. Everything in his life is controlled, measured, and
              optimized with meticulous precision.
            </p>

            <p className="text-xl leading-relaxed mb-8">
              "Decision fatigue is the enemy of clarity," Joe explains, pacing barefoot across the polished concrete
              floor of his home office. "Every choice you make depletes your mental resources. I save mine for what
              matters." The statement is delivered not as advice but as doctrine—the operating principle of a man who
              has optimized his existence with the same ruthless efficiency with which he has optimized markets.
            </p>

            <p className="text-xl leading-relaxed mb-8">
              What matters to Joe is identifying inefficiencies—places where human psychology creates market
              distortions. His legendary focus can be unnerving to those experiencing it for the first time. During
              meetings, he often falls completely silent for minutes at a time, eyes fixed on some invisible
              calculation, before suddenly delivering a fully-formed solution to a problem no one else had identified.
            </p>

            <blockquote
              className={`border-l-4 ${theme === "dark" ? "border-gray-300 text-gray-100" : "border-black text-black"} pl-6 italic my-12 text-2xl`}
            >
              "Joe doesn't think outside the box. He doesn't see the box at all. He's operating in dimensions most
              people can't access."
              <cite className={`block text-base font-sans mt-4 not-italic ${theme === "dark" ? "text-gray-300" : ""}`}>
                — Former PRISM Chief Technology Officer
              </cite>
            </blockquote>

            <p className="text-xl leading-relaxed mb-8">
              This intensity is balanced by unexpected moments of warmth and humor, particularly with his children. "He
              can switch from discussing complex market dynamics to building elaborate sandcastles with Alannah in
              seconds," Maeve notes. "It's like watching someone move between different realities."
            </p>

            <div className="my-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              <figure className="mx-auto">
                <div className="relative mx-auto" style={{ height: "500px", width: "100%" }}>
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/joe1.jpg-awhXNJmZIB2wX1zo7HmNmXrYAGtq5B.jpeg"
                    alt="Joe Roccki at his mountain retreat"
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>
                <figcaption
                  className={`${theme === "dark" ? "bg-gray-800 text-gray-300" : "bg-white text-gray-600"} p-4 text-center italic text-base`}
                >
                  Joe Roccki at his Lake Como property, where floor-to-ceiling windows frame views of the mountains that
                  he says "recalibrate his perspective"
                </figcaption>
              </figure>
              <figure className="mx-auto">
                <div className="relative mx-auto" style={{ height: "500px", width: "100%" }}>
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/joe4.jpg-5xyxJkIK7IXg3P9Veobw7SwLnc7TnJ.jpeg"
                    alt="Joe Roccki at sunset"
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>
                <figcaption
                  className={`${theme === "dark" ? "bg-gray-800 text-gray-300" : "bg-white text-gray-600"} p-4 text-center italic text-base`}
                >
                  A rare moment of reflection: Joe watching the sunset from his Venice property, where he often retreats
                  to contemplate major market moves
                </figcaption>
              </figure>
            </div>

            <figure className="my-12 mx-auto">
              <div className="relative mx-auto" style={{ height: "500px", width: "100%" }}>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/joew3rd.jpg-mE8auI1fKzH2jGhmeP6K2gSOHJ8ZYs.jpeg"
                  alt="Joe teaching his son tennis"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
              <figcaption
                className={`${theme === "dark" ? "bg-gray-800 text-gray-300" : "bg-white text-gray-600"} p-4 text-center italic text-base`}
                style={{ maxWidth: "800px", margin: "0 auto" }}
              >
                Joe teaching his youngest son the fundamentals of tennis at their private court. "He approaches teaching
                with the same methodical precision he applies to trading," says Maeve.
              </figcaption>
            </figure>

            {/* Replace this grid */}
            <figure className="my-12 mx-auto">
              <div className="relative mx-auto" style={{ height: "600px", maxWidth: "500px" }}>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%2018%2C%202025%2C%2007_21_04%20PM-6uX6VWQqVAG0Xajf8WBwkN9z5BbesV.png"
                  alt="Alannah Roccki portrait"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
              <figcaption
                className={`${theme === "dark" ? "bg-gray-800 text-gray-300" : "bg-white text-gray-600"} p-4 text-center italic text-base`}
                style={{ maxWidth: "500px", margin: "0 auto" }}
              >
                Alannah Roccki, Joe's only daughter, whose striking eyes and analytical mind already show signs of her
                father's gift for pattern recognition and her mother's poise. "She observes everything," notes a family
                friend.
              </figcaption>
            </figure>

            <div className="my-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              <figure className="mx-auto">
                <div className="relative mx-auto" style={{ height: "400px", width: "300px" }}>
                  <Image
                    src="/images/victorjosefrocckiiii.jpeg"
                    alt="Victor Josef Roccki IV"
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>
                <figcaption
                  className={`${theme === "dark" ? "bg-gray-800 text-gray-300" : "bg-white text-gray-600"} p-4 text-center italic text-base`}
                  style={{ width: "300px", margin: "0 auto" }}
                >
                  Victor Josef Roccki IV, Joe's eldest son, already showing the family's characteristic poise and
                  confidence at a young age
                </figcaption>
              </figure>
              <figure className="mx-auto">
                <div className="relative mx-auto" style={{ height: "400px", width: "300px" }}>
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/secondborn2.jpg-MJbyOpTFPkgvehABInVAotPVE4WTDq.jpeg"
                    alt="Victor Josef Roccki V"
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>
                <figcaption
                  className={`${theme === "dark" ? "bg-gray-800 text-gray-300" : "bg-white text-gray-600"} p-4 text-center italic text-base`}
                  style={{ width: "300px", margin: "0 auto" }}
                >
                  Victor Josef Roccki V in the family's Manhattan residence, where each room features a digital display
                  showing real-time market data
                </figcaption>
              </figure>
            </div>

            <figure className="my-12 mx-auto">
              <div className="relative mx-auto" style={{ height: "500px", maxWidth: "800px" }}>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/thirdborn2.jpg-Lgo1MQZhe1dgap0knETxD4h614Ar7z.jpeg"
                  alt="Joe's son boarding the family jet"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
              <figcaption
                className={`${theme === "dark" ? "bg-gray-800 text-gray-300" : "bg-white text-gray-600"} p-4 text-center italic text-base`}
                style={{ maxWidth: "800px", margin: "0 auto" }}
              >
                The youngest Roccki son boarding "The Ghost," the family's Gulfstream G700, for a weekend trip to their
                Lake Como estate
              </figcaption>
            </figure>
          </div>

          <div className="section mb-16">
            <h2
              className={`text-3xl font-bold mb-8 font-serif border-b ${theme === "dark" ? "border-gray-700" : "border-gray-200"} pb-2`}
            >
              THE GENESIS OF PRISM
            </h2>

            <p className="text-xl leading-relaxed mb-8">
              The idea for PRISM came to Joe Roccki during the darkest period of his life. In early 2025, at the
              absolute nadir of his addiction and self-destruction, Joe experienced what he now calls his "moment of
              clarity" - a sudden, profound realization about the nature of human belief and its relationship to value.
            </p>

            <p className="text-xl leading-relaxed mb-8">
              "I was watching myself self-sabotage in real time," Joe recalls, his voice dropping to that characteristic
              near-whisper. "I could see the patterns of my own destructive behavior with perfect clarity. And in that
              moment, I realized that what I was doing with my life was exactly what markets do on a macro scale -
              expressing belief through action, even when that belief is fundamentally irrational."
            </p>

            <figure className="my-12 mx-auto">
              <div className="relative mx-auto" style={{ height: "500px", maxWidth: "800px" }}>
                <Image
                  src="/family/joe-roccki-early-days.jpg"
                  alt="Joe Roccki during PRISM's early development"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
              <figcaption
                className={`${theme === "dark" ? "bg-gray-800 text-gray-300" : "bg-white text-gray-600"} p-4 text-center italic text-base`}
                style={{ maxWidth: "800px", margin: "0 auto" }}
              >
                Joe during PRISM's early development phase in 2025, when he would often work for 72 hours straight,
                fueled by nothing but espresso and determination.
              </figcaption>
            </figure>

            <p className="text-xl leading-relaxed mb-8">
              This observation triggered a cascade of connections in Joe's mind. He began to see how the same
              psychological principles operated across seemingly unrelated domains—sports betting, stock markets,
              political forecasting, even art valuation. In each case, human conviction was being translated into
              financial positions, but in siloed, inefficient systems.
            </p>

            <p className="text-xl leading-relaxed mb-8">
              "The fragmentation was the inefficiency," Joe explains. "If you believe the Patriots will win the Super
              Bowl, that same conviction should inform your position on their sponsor's stock. If you believe climate
              change will accelerate, that should affect your positions across energy, agriculture, and real estate
              simultaneously. But the markets weren't connected."
            </p>

            <p className="text-xl leading-relaxed mb-8">
              Within hours of this realization, Joe checked himself into rehab. After completing a 90-day program, he
              emerged transformed - physically, mentally, and with a vision that would reshape global markets. For the
              next three months, he lived in a sparsely furnished apartment in Red Bank, working obsessively on the
              mathematical architecture that would become PRISM's foundation.
            </p>

            <blockquote
              className={`border-l-4 ${theme === "dark" ? "border-gray-300 text-gray-100" : "border-black text-black"} pl-6 italic my-12 text-2xl`}
            >
              "I've never seen anyone work like that. He covered every wall with equations and diagrams. He barely ate.
              When I'd bring him food, he'd sometimes look at me like he wasn't sure who I was—not because he didn't
              recognize me, but because he was so deep in the mathematical space he was creating."
              <cite className={`block text-base font-sans mt-4 not-italic ${theme === "dark" ? "text-gray-300" : ""}`}>
                — Early PRISM collaborator
              </cite>
            </blockquote>

            <p className="text-xl leading-relaxed mb-8">
              The breakthrough came when Joe developed what he calls the "Unified Belief Architecture"—a mathematical
              framework that could price risk across domains by identifying the underlying psychological patterns
              driving human decision-making. This became the foundation for ARCH, PRISM's neural engine.
            </p>

            <figure className="my-12 mx-auto">
              <div className="relative mx-auto" style={{ height: "500px", maxWidth: "800px" }}>
                <Image
                  src="/family/joe-roccki-whiteboard.jpg"
                  alt="Joe Roccki explaining PRISM architecture"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
              <figcaption
                className={`${theme === "dark" ? "bg-gray-800 text-gray-300" : "bg-white text-gray-600"} p-4 text-center italic text-base`}
                style={{ maxWidth: "800px", margin: "0 auto" }}
              >
                Joe explaining PRISM's architecture to early investors. "He could make the most complex mathematical
                concepts seem obvious," recalls one venture capitalist who backed the platform.
              </figcaption>
            </figure>

            <p className="text-xl leading-relaxed mb-8">
              By mid-2025, Joe had assembled a small team of mathematicians, behavioral economists, and developers. They
              worked in secret, funded entirely by Joe's remaining personal savings and a small investment from his
              father. The team operated out of a converted warehouse in Red Bank, with no company name on the door and
              strict NDAs for everyone involved.
            </p>

            <p className="text-xl leading-relaxed mb-8">
              "We called it 'The Monastery' because of the monastic conditions and the almost religious dedication,"
              says Dr. Elena Vostok, one of the original ARCH developers. "Joe would work until he literally collapsed
              from exhaustion. Then he'd sleep for four hours and start again. His mind seemed to operate on a different
              metabolic schedule than his body."
            </p>

            <p className="text-xl leading-relaxed mb-8">
              The core team consisted of just seven people: Joe as the visionary architect; Dr. Elena Vostok, a
              Russian-born mathematician who specialized in stochastic processes; Dr. Marcus Chen, a behavioral
              economist who had studied under Daniel Kahneman; Raj Patel, a quantum computing specialist; Sarah
              Levinson, a UI/UX designer with a background in cognitive psychology; Thomas Wright, a former hedge fund
              quant; and David Kim, a network security expert who had previously worked for the NSA.
            </p>

            <p className="text-xl leading-relaxed mb-8">
              PRISM's fundamental innovation was its ability to create a unified marketplace for conviction across
              domains. At its core, PRISM is a platform that allows users to monetize their beliefs about anything—from
              stock prices to sports outcomes, from election results to climate change timelines—in a single, integrated
              ecosystem.
            </p>

            <p className="text-xl leading-relaxed mb-8">
              The platform operates through what Joe calls "conviction contracts"—financial instruments that represent a
              specific belief about a future state of the world. These contracts can be created, bought, sold, and
              traded like any other financial asset, with their prices reflecting the collective confidence in that
              financial asset, with their prices reflecting the collective confidence in that particular outcome.
            </p>

            <p className="text-xl leading-relaxed mb-8">
              What makes PRISM revolutionary is its cross-domain architecture. If a user believes that a particular
              technology will disrupt an industry, they can simultaneously take positions on the technology company's
              stock, the incumbent companies' decline, the regulatory environment, and even the social acceptance of the
              technology—all through a single interface that shows the interconnections between these beliefs.
            </p>

            <p className="text-xl leading-relaxed mb-8">
              "PRISM doesn't just predict the future—it creates markets for possible futures," explains financial
              analyst Maria Rodriguez. "It's like if prediction markets, stock exchanges, betting platforms, and futures
              markets all merged into a single ecosystem where beliefs could flow freely across domains."
            </p>

            <p className="text-xl leading-relaxed mb-8">
              The technical challenges were immense. PRISM needed to process vast amounts of data in real-time, identify
              patterns across seemingly unrelated domains, and present actionable insights to users with varying levels
              of financial sophistication. The team developed a proprietary algorithm called LENS (Latent Emotional
              Network Synthesis) that could detect emotional patterns in market movements before they became visible in
              traditional metrics.
            </p>

            <p className="text-xl leading-relaxed mb-8">
              "LENS was revolutionary because it could quantify something previously thought unquantifiable: the
              emotional undercurrents driving market behavior," explains Dr. Chen. "It could detect fear, greed,
              uncertainty, and confidence across multiple markets simultaneously, then translate those emotions into
              predictive models."
            </p>

            <p className="text-xl leading-relaxed mb-8">
              By early 2028, they had a working prototype. By late 2028, the platform was in beta testing with a select
              group of users. And by 2029, PRISM launched to the world, initially with little fanfare but quickly
              gaining momentum as users discovered its unprecedented capabilities.
            </p>

            <blockquote
              className={`theme === "dark" ? "bg-gray-800 text-white" : "bg-black text-white"} p-8 my-12 text-2xl text-center italic`}
            >
              "Most platforms are built to solve a problem. PRISM was built to solve the meta-problem: how belief
              becomes value."
              <cite className="block text-base font-sans mt-4 not-italic">— Joe Roccki</cite>
            </blockquote>

            <p className="text-xl leading-relaxed mb-8">
              The launch strategy was as unconventional as the platform itself. Rather than a splashy marketing
              campaign, Joe invited 100 of the world's most influential investors to a private demonstration at The
              Monastery. No press, no fanfare—just a direct demonstration of PRISM's capabilities. Each invitee was
              given a personalized analysis of their own investment portfolio, highlighting inefficiencies and
              opportunities they had missed.
            </p>

            <p className="text-xl leading-relaxed mb-8">
              "I watched billionaires' jaws literally drop as Joe showed them blind spots in their own strategies,"
              recalls Sarah Levinson. "One hedge fund manager actually teared up when he saw how much money he'd left on
              the table by not connecting his convictions across markets."
            </p>

            <p className="text-xl leading-relaxed mb-8">
              Those 100 initial users became PRISM's evangelists, spreading word of the platform through the highest
              echelons of finance. Within six months, PRISM had a waiting list of over 10,000 qualified investors, each
              willing to pay the $250,000 annual subscription fee for access.
            </p>

            <p className="text-xl leading-relaxed mb-8">
              What made PRISM truly revolutionary wasn't just its predictive power but its ability to create entirely
              new markets based on previously unmonetized beliefs. Users could create and trade "conviction contracts"
              on anything from climate change timelines to cultural trends, with PRISM's algorithms ensuring efficient
              price discovery across these novel markets.
            </p>

            <p className="text-xl leading-relaxed mb-8">
              "The rest, as they say, is history—though in PRISM's case, it's history that continues to be written. What
              began as an insight during Joe's darkest moment has evolved into a system that has fundamentally altered
              how humans express and monetize conviction across every domain of life.
            </p>

            <p className="text-xl leading-relaxed mb-8">
              "The most powerful ideas seem obvious in retrospect," Joe reflects, looking out over the Navesink from his
              estate. "Of course belief should be unified across domains. Of course conviction should be directly
              monetizable. Of course markets should be accessible to everyone. But sometimes it takes seeing the world
              through a different lens to recognize what should have been obvious all along."
            </p>

            <figure className="my-12 mx-auto">
              <div className="relative mx-auto" style={{ height: "500px", maxWidth: "800px" }}>
                <Image
                  src="/family/joe-roccki-launch.jpg"
                  alt="Joe Roccki at PRISM launch"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
              <figcaption
                className={`${theme === "dark" ? "bg-gray-800 text-gray-300" : "bg-white text-gray-600"} p-4 text-center italic text-base`}
                style={{ maxWidth: "800px", margin: "0 auto" }}
              >
                Joe at PRISM's official launch event in 2029, a deliberately understated affair that belied the
                platform's revolutionary impact.
              </figcaption>
            </figure>
          </div>

          <div className="section mb-16">
            <h2
              className={`text-3xl font-bold mb-8 font-serif border-b ${theme === "dark" ? "border-gray-700" : "border-gray-200"} pb-2`}
            >
              PRISM: HOW IT WORKS
            </h2>

            <p className="text-xl leading-relaxed mb-8">
              To understand PRISM is to understand a fundamentally new approach to markets. Unlike traditional financial
              platforms that segregate different asset classes into separate systems, PRISM creates a unified ecosystem
              where any form of conviction can be expressed, quantified, and monetized.
            </p>

            <p className="text-xl leading-relaxed mb-8">
              At its most basic level, PRISM allows users to create what Joe calls "conviction contracts" - financial
              instruments that represent a specific belief about a future state of the world. These contracts can be as
              straightforward as "Company X's stock will exceed $500 by December" or as complex as "Quantum computing
              will achieve practical supremacy before artificial general intelligence."
            </p>

            <p className="text-xl leading-relaxed mb-8">
              "What makes PRISM different is that it doesn't just let you bet on outcomes—it creates an entire financial
              ecosystem around your convictions," explains financial analyst David Zhao. "You can hedge, leverage,
              short, and arbitrage across domains that were previously disconnected."
            </p>

            <p className="text-xl leading-relaxed mb-8">
              The platform's interface is deceptively simple. Users are presented with a personalized dashboard that
              shows their current positions, potential opportunities based on their existing convictions, and anomalies
              in their belief structure—places where their financial positions don't align with their stated beliefs.
            </p>

            <p className="text-xl leading-relaxed mb-8">
              Behind this elegant interface lies PRISM's revolutionary architecture: a multi-layered neural network that
              continuously analyzes patterns across domains, identifies correlations that human analysts might miss, and
              creates bridges between previously siloed markets.
            </p>

            <p className="text-xl leading-relaxed mb-8">
              "The genius of PRISM is that it doesn't just predict markets—it creates them," says economist Laura Chen.
              "It identifies gaps in the market for conviction and fills them, allowing users to express beliefs that
              previously had no financial outlet."
            </p>

            <p className="text-xl leading-relaxed mb-8">
              For example, if a user believes that climate change will accelerate faster than the consensus view, PRISM
              doesn't just offer them a simple bet on global temperatures. Instead, it presents a sophisticated
              portfolio of positions across energy companies, agricultural futures, coastal real estate, carbon credits,
              and climate technology startups—all calibrated to express that specific conviction with maximum
              efficiency.
            </p>

            <p className="text-xl leading-relaxed mb-8">
              The platform's core technology consists of three integrated systems:
            </p>

            <p className="text-xl leading-relaxed mb-8">
              ARCH (Adaptive Recursive Conviction Heuristic) - The neural engine that identifies patterns across domains
              and creates mathematical models of belief structures. ARCH continuously learns from user behavior, market
              movements, and external data sources, refining its models in real-time.
            </p>

            <p className="text-xl leading-relaxed mb-8">
              LENS (Latent Emotional Network Synthesis) - The sentiment analysis system that detects emotional currents
              in markets before they manifest in price movements. LENS analyzes everything from social media sentiment
              to trading volumes to news headlines, creating an "emotional map" of the market that often predicts major
              shifts days or weeks before they occur.
            </p>

            <p className="text-xl leading-relaxed mb-8">
              PRISM Core - The marketplace infrastructure that allows for the creation, trading, and settlement of
              conviction contracts across domains. PRISM Core ensures liquidity, manages risk, and maintains the
              integrity of the market, allowing users to move seamlessly between different types of conviction.
            </p>

            <p className="text-xl leading-relaxed mb-8">
              "What most people don't realize is that PRISM isn't just a trading platform—it's a new financial
              paradigm," explains former SEC Commissioner Robert Jackson. "It's creating markets for things we never
              thought could be monetized: the timing of technological breakthroughs, the spread of cultural phenomena,
              the evolution of social norms. It's turning abstract beliefs into tradable assets."
            </p>

            <p className="text-xl leading-relaxed mb-8">
              This expansion of what can be monetized has profound implications. PRISM effectively creates price
              discovery mechanisms for domains that previously relied on expert opinion or consensus forecasts. Now, the
              collective intelligence of the market can be applied to questions ranging from scientific breakthroughs to
              geopolitical developments.
            </p>

            <p className="text-xl leading-relaxed mb-8">
              "Before PRISM, if you wanted to know when quantum computing would achieve practical supremacy, you had to
              rely on expert opinions that were often contradictory and rarely accountable," explains Joe. "Now, you can
              see what the market actually believes, expressed through real financial positions. It's a much more honest
              and efficient mechanism for price discovery."
            </p>

            <p className="text-xl leading-relaxed mb-8">
              As PRISM continues to evolve, its impact on global markets grows exponentially. What began as a tool for
              sophisticated investors has become an essential infrastructure for decision-making across industries.
              Governments consult PRISM markets when formulating policy. Corporations use it to gauge the viability of
              new products. Scientists reference it when allocating research resources.
            </p>

            <p className="text-xl leading-relaxed mb-8">
              "We're still in the early stages," Joe insists, despite PRISM's already transformative impact. "The
              ultimate goal is to create a system where every form of human conviction can find its most efficient
              expression. When that happens, we'll see an acceleration of progress unlike anything in history."
            </p>

            <p className="text-xl leading-relaxed mb-8">
              As the sun finally rises over the Navesink, casting long shadows across the manicured grounds of the
              Roccki estate, Joe stands at the edge of his property, looking out over the water. In the distance, the
              Manhattan skyline shimmers like a mirage—a monument to an older form of finance that Joe has
              simultaneously mastered and transcended.
            </p>

            <p className="text-xl leading-relaxed mb-8">
              "The future isn't something that happens to you," he says, his voice barely audible above the gentle
              lapping of waves against the shore. "It's something you trade into existence."
            </p>

            <blockquote
              className={`${theme === "dark" ? "bg-gray-800 text-white" : "bg-black text-white"} p-8 my-12 text-2xl text-center italic`}
            >
              "In the end, markets are just collective stories we tell ourselves about what might happen next. PRISM
              just makes those stories more honest."
              <cite className="block text-base font-sans mt-4 not-italic">— Joe Roccki</cite>
            </blockquote>
          </div>
        </div>
      </main>
    </div>
  )
}
