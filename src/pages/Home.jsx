import React, { useState } from "react";
import Banner from "../components/Banner";
import ImageSlider from "../components/ImageSlider";
import Footer from "../components/Footer";

const Home = () => {
  // State for "Read More / Read Less" in Crochet History
  const [showFullHistory, setShowFullHistory] = useState(false);

  const performers = [
    { id: 1, name: "Vanna White", description: "A lifelong lover of yarn and spokesperson for Lion Brand Yarn for 18 years.", image: "/images/vannaa.jpg" },
    { id: 2, name: "Maurice Greene", description: "Kickboxer and UFC fighter who owns 'The Crochet Boss', selling his finished crochet items.", image: "/images/greene.jpg" },
    { id: 3, name: "Amanda Seyfried", description: "Actress and crocheter! Made granny square quilts, rainbow doilies, and more.", image: "/images/amandaa.jpg" },
    { id: 4, name: "Aretha Franklin", description: "Queen of Soul who loved crocheting various items for family and friends.", image: "/images/arethaa.jpg" },
    { id: 5, name: "Jane Doe", description: "Renowned crochet artist famous for her modern doilies.", image: "/images/janee.jpg" },
    { id: 6, name: "John Smith", description: "Influential crochet designer and instructor online.", image: "/images/smith.avif" },
  ];

  const benefitSliderImages = [
    "/images/image11.png",
    "/images/image12.webp",
    "/images/image13.webp",
    "/images/image14.jpg",
  ];

  return (
   <div className="flex flex-col min-h-screen ml-64">
    <div className="flex-grow">
        <Banner />

{/* Intro Section */}
<section className="my-12 px-4 md:px-0 flex flex-col md:flex-row-reverse items-center gap-8">
  {/* Image on the right */}
  <div className="md:w-1/2">
    <img 
      src="/images/image12.webp" 
      alt="Crochet Intro" 
      className="w-full h-auto rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
    />
  </div>

  {/* Text on the left */}
  <div className="md:w-1/2 flex flex-col justify-center">
    <h2
      className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 hover:text-gray-700 text-center"
      style={{ fontFamily: "Times New Roman, serif" }}
    >
      Discover the Art of Crochet
    </h2>
<ul className="list-disc pl-6 text-black text-base space-y-2 max-w-3xl mx-auto" style={{ fontFamily: "Times New Roman, serif" }}>
      Crochet is more than just a craft — it's a creative journey. Transform simple yarn into stunning fabrics, stylish garments, and unique home décor.  
      <span className="font-semibold text-gray-900"> From beginners to experienced makers</span>, there’s always a new technique to explore and inspiration to discover.
   </ul>
    <p 
      className="text-gray-600 italic"
      style={{ fontFamily: "Times New Roman, serif" }}
    >
      Join the CrochetDream community and bring your imagination to life, one stitch at a time.
    </p>
  </div>
</section>


        {/* Crochet History Section */}
      <section className="my-12 px-4 md:px-16 bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-xl shadow-md py-10">
  <div className="max-w-5xl mx-auto">
    <h2
      className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 hover:text-gray-700 text-center"
      style={{ fontFamily: "Times New Roman, serif" }}
    >
      Crochet History
    </h2>

<ul className="list-disc pl-6 text-black text-base space-y-2 max-w-3xl mx-auto" style={{ fontFamily: "Times New Roman, serif" }}>
      Crochet, as we know it today, has origins that are more recent than many expect, yet it has fascinating precursors.
      Techniques like Chinese embroidery and French tambour lace used hooks to create intricate patterns on fabric.
      Shepherd’s knitting, practiced in countries such as Estonia, Scotland, and Romania, also contributed to crochet's
      development. Another ancestor, the ancient Danish technique of Nålebinding, influenced early needlework and inspired
      methods later used in crochet.
    </ul>

    {showFullHistory && (
      <>
<ul className="list-disc pl-6 text-black text-base space-y-2 max-w-3xl mx-auto" style={{ fontFamily: "Times New Roman, serif" }}>
          In the early 1800s, the first crochet patterns were published in Europe. The Dutch magazine{" "}
          <em>Penélopé</em> (1823) listed instructions for making purses, and by 1835, magazines in Germany and the
          Netherlands introduced new stitches for bags. During this period, crochet began to take form as a craft distinct
          from other textile arts.
       </ul>

<ul className="list-disc pl-6 text-black text-base space-y-2 max-w-3xl mx-auto" style={{ fontFamily: "Times New Roman, serif" }}>
          The mid-1800s saw the rise of Irish crochet lace. During the Great Irish Famine (1845–1849), women used crochet to
          earn money, creating lace that imitated expensive Venetian designs. French crocheter Mademoiselle Riego de la
          Branchardiere published crochet books, and even Queen Victoria learned to crochet herself, producing scarves for
          soldiers and popularizing the craft.
        </ul>

<ul className="list-disc pl-6 text-black text-base space-y-2 max-w-3xl mx-auto" style={{ fontFamily: "Times New Roman, serif" }}>
          By the late 1800s, technical improvements such as mercerization strengthened cotton for easier crocheting, and
          magazines published more complex patterns. The industrial revolution allowed middle- and upper-class women more
          free time, making crochet a fashionable hobby. In the early 1900s, Edwardian fashion encouraged detailed crochet
          clothing, and modern hooks were introduced, including the first American hooks in 1917 and aluminum hooks in 1923.
        </ul>

<ul className="list-disc pl-6 text-black text-base space-y-2 max-w-3xl mx-auto" style={{ fontFamily: "Times New Roman, serif" }}>
          During the World Wars, governments encouraged women to crochet for troops, providing practical items for soldiers.
          In the 1960s and 1970s, crochet experienced a revival through alternative and hippie cultures, with granny squares,
          home décor, and fashion items becoming popular once again.
        </ul>

<ul className="list-disc pl-6 text-black text-base space-y-2 max-w-3xl mx-auto" style={{ fontFamily: "Times New Roman, serif" }}>
          In the modern age, crochet has merged with social media and online communities. The Crochet Guild of America,
          founded in 1994, and the online forum Ravelry, established in 2007, helped enthusiasts share techniques, patterns,
          and designs worldwide. Today, crochet is celebrated as both a creative hobby and an art form, with countless
          designers continuing to innovate.
        </ul>
      </>
    )}

    <div className="text-center">
      <button
        onClick={() => setShowFullHistory(!showFullHistory)}
        className="px-5 py-2 mt-4 bg-gradient-to-r from-red-500 via-green-500 to-black text-white font-semibold rounded-full hover:opacity-90 transition-all duration-300"
        style={{ fontFamily: "Times New Roman, serif" }}
      >
        {showFullHistory ? "Read Less" : "Read More"}
      </button>
    </div>
  </div>
</section>



        {/* Types of Crochet */}
       <section className="my-16 px-4 md:px-8">
  <h2
    className="text-4xl font-bold mb-10 text-center text-black hover:text-gray-700 transition-colors duration-300"
    style={{ fontFamily: "Bookman Old Style" }}
  >
    Types of Crochet
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    {/* Standard Crochet */}
    <div className="p-6 rounded-2xl shadow-lg bg-gradient-to-br from-[#C3DAC3] to-[#B6B09F] hover:from-[#C0B7A8] hover:to-[#E8E2D9] transition-transform duration-300 hover:scale-105">
      <h3
        className="text-2xl font-semibold mb-3 text-black"
        style={{ fontFamily: "Bookman Old Style" }}
      >
        Standard Crochet
      </h3>
      <p
        className="text-base text-gray-800 leading-relaxed"
        style={{ fontFamily: "Times New Roman" }}
      >
        The classic crochet method using basic stitches such as single, double, and half-double crochet to create garments and home décor.
      </p>
    </div>

    {/* Irish Crochet */}
    <div className="p-6 rounded-2xl shadow-lg bg-gradient-to-br from-[#F0D4C1] to-[#B6B09F] hover:from-[#E7C7B0] hover:to-[#E8E2D9] transition-transform duration-300 hover:scale-105">
      <h3
        className="text-2xl font-semibold mb-3 text-black"
        style={{ fontFamily: "Bookman Old Style" }}
      >
        Irish Crochet
      </h3>
      <p
        className="text-base text-gray-800 leading-relaxed"
        style={{ fontFamily: "Times New Roman" }}
      >
        A lace technique developed in Ireland, using separate motifs assembled into intricate designs. Often used as a source of income during the Great Famine.
      </p>
    </div>

    {/* Tunisian Crochet */}
    <div className="p-6 rounded-2xl shadow-lg bg-gradient-to-br from-[#E7E8E3] to-[#B6B09F] hover:from-[#D9DAD4] hover:to-[#E8E2D9] transition-transform duration-300 hover:scale-105">
      <h3
        className="text-2xl font-semibold mb-3 text-black"
        style={{ fontFamily: "Bookman Old Style" }}
      >
        Tunisian Crochet
      </h3>
      <p
        className="text-base text-gray-800 leading-relaxed"
        style={{ fontFamily: "Times New Roman" }}
      >
        Combines knitting and crochet using a long hook. Creates dense, textured fabrics often used for blankets and garments.
      </p>
    </div>

    {/* Amigurumi */}
    <div className="p-6 rounded-2xl shadow-lg bg-gradient-to-br from-[#F5C3C3] to-[#B6B09F] hover:from-[#EABBBB] hover:to-[#E8E2D9] transition-transform duration-300 hover:scale-105">
      <h3
        className="text-2xl font-semibold mb-3 text-black"
        style={{ fontFamily: "Bookman Old Style" }}
      >
        Amigurumi
      </h3>
      <p
        className="text-base text-gray-800 leading-relaxed"
        style={{ fontFamily: "Times New Roman" }}
      >
        Japanese style crochet for creating small toys, animals, and figures. Focuses on tight stitches for solid shapes.
      </p>
    </div>

    {/* Filet Crochet */}
    <div className="p-6 rounded-2xl shadow-lg bg-gradient-to-br from-[#F9F4E7] to-[#B6B09F] hover:from-[#EFE8DB] hover:to-[#E8E2D9] transition-transform duration-300 hover:scale-105">
      <h3
        className="text-2xl font-semibold mb-3 text-black"
        style={{ fontFamily: "Bookman Old Style" }}
      >
        Filet Crochet
      </h3>
      <p
        className="text-base text-gray-800 leading-relaxed"
        style={{ fontFamily: "Times New Roman" }}
      >
        Uses open and closed mesh patterns to create geometric or pictorial designs, often for decorative curtains or tablecloths.
      </p>
    </div>

    {/* Hairpin Lace */}
    <div className="p-6 rounded-2xl shadow-lg bg-gradient-to-br from-[#D6E3CF] to-[#B6B09F] hover:from-[#C9DABF] hover:to-[#E8E2D9] transition-transform duration-300 hover:scale-105">
      <h3
        className="text-2xl font-semibold mb-3 text-black"
        style={{ fontFamily: "Bookman Old Style" }}
      >
        Hairpin Lace
      </h3>
      <p
        className="text-base text-gray-800 leading-relaxed"
        style={{ fontFamily: "Times New Roman" }}
      >
        Uses a hairpin-shaped loom to create delicate lace strips, which are then joined into scarves, shawls, or garments.
      </p>
    </div>
  </div>
</section>

       <section className="my-12 px-4 md:px-0 bg-[#fdf8f5] p-6 rounded-2xl shadow-md">
  <h2
    className="text-4xl font-bold mb-4 text-[#2e2b2b] hover:text-[#3b3a3a]"
    style={{ fontFamily: "Times New Roman, serif" }}
  >
    Materials & Tools
  </h2>
  <p
    className="text-lg text-[#222222] hover:text-[#444444] mb-4 leading-relaxed"
    style={{ fontFamily: "Times New Roman, serif" }}
  >
    Getting started with crochet requires some basic materials. Choosing the right tools can make a big difference in comfort and results.
  </p>
<ul className="list-disc pl-6 text-base space-y-2 max-w-3xl" style={{ fontFamily: "Times New Roman, serif" }}>
    <li>
      <b className="text-[#0b6623]">Yarns:</b> Cotton, wool, acrylic, or blended fibers — each giving different textures and warmth.
    </li>
    <li>
      <b className="text-[#d32f2f]">Crochet Hooks:</b> Available in different sizes and materials like aluminum, bamboo, or plastic.
    </li>
    <li>
      <b className="text-[#000000]">Accessories:</b> Stitch markers, tapestry needles, scissors, and measuring tape for precise work.
    </li>
  </ul>
</section>
        
{/* Common Crochet Stitches */}
<section className="my-16 px-4 md:px-8">
  <h2
    className="text-4xl font-bold mb-8 text-center text-black hover:text-gray-700 transition-colors duration-300"
    style={{ fontFamily: "Bookman Old Style" }}
  >
    Common Crochet Stitches
  </h2>

  <p
    className="text-lg text-center text-gray-800 mb-10 leading-relaxed max-w-3xl mx-auto"
    style={{ fontFamily: "Times New Roman" }}
  >
    Every crochet masterpiece begins with these fundamental stitches.
    Mastering them opens endless possibilities to create beautiful,
    unique designs.
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    {/* Slip Stitch */}
    <div className="bg-gradient-to-br from-[#F9F4E7] to-[#B6B09F] rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform duration-300 text-center">
      <div className="w-full h-40 rounded-xl mb-4 overflow-hidden">
        <img src="/images/crochet1.jpg" alt="Slip Stitch" className="w-full h-full object-cover" />
      </div>
      <h3
        className="text-2xl font-semibold mb-2 text-black"
        style={{ fontFamily: "Bookman Old Style" }}
      >
        Slip Stitch
      </h3>
      <p
        className="text-base text-gray-800 leading-relaxed"
        style={{ fontFamily: "Times New Roman" }}
      >
        A simple stitch used for joining, edging, and finishing crochet
        projects with a neat, flat appearance.
      </p>
    </div>

    {/* Chain Stitch */}
    <div className="bg-gradient-to-br from-[#C3DAC3] to-[#B6B09F] rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform duration-300 text-center">
      <div className="w-full h-40 rounded-xl mb-4 overflow-hidden">
        <img src="/images/crochet2.jpg" alt="Chain Stitch" className="w-full h-full object-cover" />
      </div>
      <h3
        className="text-2xl font-semibold mb-2 text-black"
        style={{ fontFamily: "Bookman Old Style" }}
      >
        Chain Stitch
      </h3>
      <p
        className="text-base text-gray-800 leading-relaxed"
        style={{ fontFamily: "Times New Roman" }}
      >
        The foundation of most crochet projects — a flexible base that forms
        the starting point for rows or rounds.
      </p>
    </div>

    {/* Single Crochet */}
    <div className="bg-gradient-to-br from-[#E7E8E3] to-[#B6B09F] rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform duration-300 text-center">
      <div className="w-full h-40 rounded-xl mb-4 overflow-hidden">
        <img src="/images/crochet3.jpg" alt="Single Crochet" className="w-full h-full object-cover" />
      </div>
      <h3
        className="text-2xl font-semibold mb-2 text-black"
        style={{ fontFamily: "Bookman Old Style" }}
      >
        Single Crochet
      </h3>
      <p
        className="text-base text-gray-800 leading-relaxed"
        style={{ fontFamily: "Times New Roman" }}
      >
        A compact, strong stitch used to make warm, durable fabrics — ideal
        for amigurumi and accessories.
      </p>
    </div>

    {/* Double Crochet */}
    <div className="bg-gradient-to-br from-[#F5C3C3] to-[#B6B09F] rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform duration-300 text-center">
      <div className="w-full h-40 rounded-xl mb-4 overflow-hidden">
        <img src="/images/crochet4.jpg" alt="Double Crochet" className="w-full h-full object-cover" />
      </div>
      <h3
        className="text-2xl font-semibold mb-2 text-black"
        style={{ fontFamily: "Bookman Old Style" }}
      >
        Double Crochet
      </h3>
      <p
        className="text-base text-gray-800 leading-relaxed"
        style={{ fontFamily: "Times New Roman" }}
      >
        A taller, airy stitch that adds flexibility and flow — perfect for
        garments, scarves, and shawls.
      </p>
    </div>

    {/* Half-Double Crochet */}
    <div className="bg-gradient-to-br from-[#D6E3CF] to-[#B6B09F] rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform duration-300 text-center">
      <div className="w-full h-40 rounded-xl mb-4 overflow-hidden">
        <img src="/images/crochet5.jpg" alt="Half-Double Crochet" className="w-full h-full object-cover" />
      </div>
      <h3
        className="text-2xl font-semibold mb-2 text-black"
        style={{ fontFamily: "Bookman Old Style" }}
      >
        Half-Double Crochet
      </h3>
      <p
        className="text-base text-gray-800 leading-relaxed"
        style={{ fontFamily: "Times New Roman" }}
      >
        A versatile stitch between single and double crochet, adding both
        texture and warmth to your creations.
      </p>
    </div>
  </div>
</section>



        {/* Materials & Tools */}


        {/* Benefits of Crochet */}
       <section className="my-12 px-4 md:px-0 bg-[#fdf8f5] p-6 rounded-2xl shadow-md">
  <h2
    className="text-4xl font-bold mb-4 text-[#2e2b2b] hover:text-[#3b3a3a]"
    style={{ fontFamily: "Times New Roman, serif" }}
  >
    Benefits of Crochet
  </h2>

<ul className="list-disc pl-6 text-black text-base space-y-2 max-w-3xl" style={{ fontFamily: "Times New Roman, serif" }}>
    <li className="hover:text-[#0b6623] transition-colors duration-200">
      Boosts creativity and imagination.
    </li>
    <li className="hover:text-[#d32f2f] transition-colors duration-200">
      Reduces stress and improves focus and mindfulness.
    </li>
    <li className="hover:text-[#000000] transition-colors duration-200">
      Enhances hand-eye coordination and fine motor skills.
    </li>
    <li className="hover:text-[#0b6623] transition-colors duration-200">
      Generates income for artisans and communities.
    </li>
    <li className="hover:text-[#d32f2f] transition-colors duration-200">
      Allows the creation of unique handmade garments and accessories.
    </li>
  </ul>

  {/* Benefit images slider */}
  <ImageSlider images={benefitSliderImages} />
</section>


        {/* Crochet Projects */}
  <section className="my-12 px-4 md:px-0 bg-[#fff8f3] p-6 rounded-2xl shadow-md">
  <h2
    className="text-4xl font-bold mb-4 text-[#2b2b2b] hover:text-[#3b3a3a]"
    style={{ fontFamily: "Times New Roman, serif" }}
  >
    Popular Crochet Projects
  </h2>

  <p
    className="text-lg text-[#222222] hover:text-[#444444] mb-4 leading-relaxed"
    style={{ fontFamily: "Times New Roman, serif" }}
  >
    Crochet can be used to make a wide variety of creative and practical items, including:
  </p>

<ul className="list-disc pl-6 text-black text-base space-y-2 max-w-3xl" style={{ fontFamily: "Times New Roman, serif" }}>
    <li className="hover:text-[#0b6623] transition-colors duration-200">
      <b>Clothing:</b> Sweaters, hats, scarves, socks, and shawls.
    </li>
    <li className="hover:text-[#d32f2f] transition-colors duration-200">
      <b>Home Décor:</b> Blankets, cushion covers, table runners, and wall hangings.
    </li>
    <li className="hover:text-[#000000] transition-colors duration-200">
      <b>Accessories & Toys:</b> Bags, jewelry, toys, amigurumi figures, and dolls.
    </li>
  </ul>
</section>


        {/* Famous Crocheters */}
   <section className="my-12 px-4 md:px-0 bg-[#fff8f3] p-6 rounded-2xl shadow-md">
  <h2
    className="text-4xl font-bold mb-8 text-[#2b2b2b] hover:text-[#3b3a3a] text-center"
    style={{ fontFamily: "Times New Roman, serif" }}
  >
    Famous Crocheters & Best Performers
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
    {performers.map((p) => (
      <div
        key={p.id}
        className="bg-white border border-[#ddd] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300"
      >
        <img
          src={p.image}
          alt={p.name}
          className="w-full h-52 object-cover"
        />
        <div className="p-4 text-center">
          <h3
            className="text-xl font-semibold mb-2 text-[#2b2b2b]"
            style={{ fontFamily: 'Times New Roman, serif' }}
          >
            {p.name}
          </h3>
          <p
            className="text-sm leading-relaxed text-[#444]"
            style={{ fontFamily: 'Times New Roman, serif' }}
          >
            {p.description}
          </p>
        </div>
      </div>
    ))}
  </div>
</section>


        {/* Crochet Tips */}
<section className="my-12 px-4 md:px-0">
  <h2
    className="text-3xl font-bold mb-6 text-black text-center"
    style={{ fontFamily: "Times New Roman, serif" }}
  >
    Tips for Beginners
  </h2>

  {/* Tips List */}
  <ul
    className="list-disc pl-6 text-black text-base space-y-2 max-w-3xl mx-auto"
    style={{ fontFamily: "Times New Roman, serif" }}
  >
    <li>Start with simple stitches and small projects.</li>
    <li>Choose medium-weight yarn and a comfortable hook.</li>
    <li>Keep track of stitches to avoid mistakes.</li>
    <li>Watch online tutorials and join crochet communities for guidance.</li>
    <li>Practice patience — crochet is a skill that improves with time.</li>
  </ul>

  {/* Teaching Video */}
  <div className="mt-8 max-w-3xl mx-auto">
<video
  controls
  className="w-full h-auto rounded-xl shadow-lg"
  style={{ fontFamily: "Times New Roman, serif" }}
>
  <source src="/videos/Beginner.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

  </div>
</section>

        {/* Resources & Community */}
<section className="my-12 px-4 md:px-0">
  <h2
    className="text-3xl font-bold mb-6 text-black text-center"
    style={{ fontFamily: "Times New Roman, serif" }}
  >
    Crochet Resources & Community
  </h2>

  <p
    className="text-black text-base mb-4 max-w-3xl mx-auto text-center"
    style={{ fontFamily: "Times New Roman, serif" }}
  >
    Connect with the global crochet community to learn, share, and get inspired:
  </p>

  <ul
    className="list-disc pl-6 text-black text-base space-y-2 max-w-3xl mx-auto"
    style={{ fontFamily: "Times New Roman, serif" }}
  >
    <li><b>Ravelry:</b> Online forum for patterns, tutorials, and sharing creations.</li>
    <li><b>YouTube:</b> Free step-by-step tutorials for beginners and advanced crocheters.</li>
    <li><b>Blogs & Crochet Guilds:</b> Inspiration, workshops, and networking with fellow enthusiasts.</li>
  </ul>
</section>



        {/* Fun Facts */}
<section className="my-12 px-4 md:px-0">
  <h2
    className="text-3xl font-bold mb-6 text-black text-center"
    style={{ fontFamily: "Times New Roman, serif" }}
  >
    Fun Crochet Facts
  </h2>

  <ul className="list-disc pl-6 text-black text-base space-y-2 max-w-3xl mx-auto" style={{ fontFamily: "Times New Roman, serif" }}>
    <li>Granny squares became an iconic crochet pattern in the 1960s and 70s.</li>
    <li>Crochet was used during wartime to make clothing and practical items for soldiers.</li>
    <li>Many crochet traditions are passed down from generation to generation.</li>
    <li>Social media has revived interest in previously forgotten techniques.</li>
  </ul>
</section>


      </div>
      <Footer />
    </div>
  );
};

export default Home;
