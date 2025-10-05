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
    <div className="flex flex-col min-h-screen ml-20">
      <div className="flex-grow">
        <Banner />

{/* Intro Section */}
<section className="my-12 px-4 md:px-0 flex flex-col md:flex-row items-center gap-6">
  {/* Image on the left */}
  <div className="md:w-1/2">
    <img 
      src="/images/coco.jpg" 
      alt="Crochet Intro" 
      className="w-full h-auto rounded-lg shadow-md"
    />
  </div>

  {/* Text on the right */}
  <div className="md:w-1/2">
    <h2 className="text-3xl font-bold mb-4 text-gray-800">Welcome to CrochetDream</h2>
    <p className="text-lg text-gray-700 mb-4">
      Crochet is a creative art form that allows you to make beautiful fabrics, clothing, and home décor. 
      It's a craft that has empowered communities, shaped fashion trends, and been passed down through generations. 
      Whether you are a beginner or an experienced crocheter, there’s always something new to learn and create.
    </p>
  </div>
</section>


 {/* Crochet History Section */}
        <section className="my-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Crochet History</h2>

          <p className="mb-4 text-gray-700">
            Crochet, as we know it today, has origins that are more recent than many expect, yet it has fascinating precursors. Techniques like Chinese embroidery and French tambour lace used hooks to create intricate patterns on fabric. Shepherd’s knitting, practiced in countries such as Estonia, Scotland, and Romania, also contributed to crochet's development. Another ancestor, the ancient Danish technique of Nålebinding, influenced early needlework and inspired methods later used in crochet.
          </p>

          {showFullHistory && (
            <>
              <p className="mb-4 text-gray-700">
                In the early 1800s, the first crochet patterns were published in Europe. The Dutch magazine <em>Penélopé</em> (1823) listed instructions for making purses, and by 1835, magazines in Germany and the Netherlands introduced new stitches for bags. During this period, crochet began to take form as a craft distinct from other textile arts.
              </p>
              <p className="mb-4 text-gray-700">
                The mid-1800s saw the rise of Irish crochet lace. During the Great Irish Famine (1845–1849), women used crochet to earn money, creating lace that imitated expensive Venetian designs. French crocheter Mademoiselle Riego de la Branchardiere published crochet books, and even Queen Victoria learned to crochet herself, producing scarves for soldiers and popularizing the craft.
              </p>
              <p className="mb-4 text-gray-700">
                By the late 1800s, technical improvements such as mercerization strengthened cotton for easier crocheting, and magazines published more complex patterns. The industrial revolution allowed middle- and upper-class women more free time, making crochet a fashionable hobby. In the early 1900s, Edwardian fashion encouraged detailed crochet clothing, and modern hooks were introduced, including the first American hooks in 1917 and aluminum hooks in 1923.
              </p>
              <p className="mb-4 text-gray-700">
                During the World Wars, governments encouraged women to crochet for troops, providing practical items for soldiers. In the 1960s and 1970s, crochet experienced a revival through alternative and hippie cultures, with granny squares, home décor, and fashion items becoming popular once again.
              </p>
              <p className="mb-4 text-gray-700">
                In the modern age, crochet has merged with social media and online communities. The Crochet Guild of America, founded in 1994, and the online forum Ravelry, established in 2007, helped enthusiasts share techniques, patterns, and designs worldwide. Today, crochet is celebrated as both a creative hobby and an art form, with countless designers continuing to innovate.
              </p>
            </>
          )}

          <button
            onClick={() => setShowFullHistory(!showFullHistory)}
            className="text-blue-600 hover:text-blue-800 font-semibold mt-2"
          >
            {showFullHistory ? "Read Less" : "Read More"}
          </button>
        </section>

{/* Types of Crochet */}
<section className="my-12 px-4 md:px-0">
  <h2 className="text-3xl font-bold mb-6 text-gray-800">Types of Crochet</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    <div className="border rounded-lg shadow-md p-4 transition bg-[#B6B09F] hover:bg-[#C0B7A8]">
      <h3 className="text-xl font-semibold mb-2 text-white">Standard Crochet</h3>
      <p className="text-white text-sm">
        The classic crochet method using basic stitches such as single, double, and half-double crochet to create garments and home décor.
      </p>
    </div>
    <div className="border rounded-lg shadow-md p-4 transition bg-[#B6B09F] hover:bg-[#C0B7A8]">
      <h3 className="text-xl font-semibold mb-2 text-white">Irish Crochet</h3>
      <p className="text-white text-sm">
        A lace technique developed in Ireland, using separate motifs assembled into intricate designs. Often used as a source of income during the Great Famine.
      </p>
    </div>
    <div className="border rounded-lg shadow-md p-4 transition bg-[#B6B09F] hover:bg-[#C0B7A8]">
      <h3 className="text-xl font-semibold mb-2 text-white">Tunisian Crochet</h3>
      <p className="text-white text-sm">
        Combines knitting and crochet using a long hook. Creates dense, textured fabrics often used for blankets and garments.
      </p>
    </div>
    <div className="border rounded-lg shadow-md p-4 transition bg-[#B6B09F] hover:bg-[#C0B7A8]">
      <h3 className="text-xl font-semibold mb-2 text-white">Amigurumi</h3>
      <p className="text-white text-sm">
        Japanese style crochet for creating small toys, animals, and figures. Focuses on tight stitches for solid shapes.
      </p>
    </div>
    <div className="border rounded-lg shadow-md p-4 transition bg-[#B6B09F] hover:bg-[#C0B7A8]">
      <h3 className="text-xl font-semibold mb-2 text-white">Filet Crochet</h3>
      <p className="text-white text-sm">
        Uses open and closed mesh patterns to create geometric or pictorial designs, often for decorative curtains or tablecloths.
      </p>
    </div>
    <div className="border rounded-lg shadow-md p-4 transition bg-[#B6B09F] hover:bg-[#C0B7A8]">
      <h3 className="text-xl font-semibold mb-2 text-white">Hairpin Lace</h3>
      <p className="text-white text-sm">
        Uses a hairpin-shaped loom to create delicate lace strips, which are then joined into scarves, shawls, or garments.
      </p>
    </div>
  </div>
</section>

        {/* Common Crochet Stitches */}
        <section className="my-12 px-4 md:px-0">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Common Crochet Stitches</h2>
          <p className="text-gray-700 mb-2">
            Every crochet project starts with a few basic stitches. Mastering these allows you to create endless designs:
          </p>
          <ul className="list-disc pl-5 text-gray-700 mb-6">
            <li><b>Slip Stitch:</b> Used for joining and finishing work.</li>
            <li><b>Chain Stitch:</b> The foundation for most projects.</li>
            <li><b>Single Crochet:</b> Basic stitch for dense fabrics.</li>
            <li><b>Double Crochet:</b> Versatile stitch for garments and accessories.</li>
            <li><b>Half-Double Crochet:</b> Intermediate stitch for texture.</li>
          </ul>
        </section>

        {/* Materials & Tools */}
        <section className="my-12 px-4 md:px-0">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Materials & Tools</h2>
          <p className="text-gray-700 mb-2">
            Getting started with crochet requires some basic materials. Choosing the right tools can make a big difference in comfort and results.
          </p>
          <ul className="list-disc pl-5 text-gray-700 mb-6">
            <li><b>Yarns:</b> Cotton, wool, acrylic, or blended fibers, each giving different textures and warmth.</li>
            <li><b>Crochet Hooks:</b> Available in sizes and materials like aluminum, bamboo, or plastic.</li>
            <li><b>Accessories:</b> Stitch markers, tapestry needles, scissors, and measuring tape for precise work.</li>
          </ul>
        </section>

        {/* Benefits of Crochet */}
        <section className="my-12 px-4 md:px-0">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Benefits of Crochet</h2>
          <ul className="list-disc pl-5 text-gray-700 mb-6">
            <li>Boosts creativity and imagination.</li>
            <li>Reduces stress and improves focus and mindfulness.</li>
            <li>Enhances hand-eye coordination and fine motor skills.</li>
            <li>Generates income for artisans and communities.</li>
            <li>Allows the creation of unique handmade garments and accessories.</li>
          </ul>
          
          {/* New benefit images slider */}
          <ImageSlider images={benefitSliderImages} />
        </section>

        {/* Crochet Projects */}
        <section className="my-12 px-4 md:px-0">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Popular Crochet Projects</h2>
          <p className="text-gray-700 mb-2">
            Crochet can be used to make a wide variety of items, including:
          </p>
          <ul className="list-disc pl-5 text-gray-700 mb-6">
            <li><b>Clothing:</b> Sweaters, hats, scarves, socks, and shawls.</li>
            <li><b>Home Décor:</b> Blankets, cushion covers, table runners, and wall hangings.</li>
            <li><b>Accessories & Toys:</b> Bags, jewelry, toys, amigurumi figures, and dolls.</li>
          </ul>
        </section>

        {/* Famous Crocheters */}
<section className="my-12 px-4 md:px-0">
  <h2 className="text-3xl font-bold mb-6 text-gray-800">Famous Crocheters & Best Performers</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
    {performers.map((p) => (
      <div key={p.id} className="border rounded-lg shadow-md p-4 hover:shadow-lg transition">
        <img src={p.image} alt={p.name} className="w-full h-48 object-cover rounded-md mb-4" />
        <h3 className="text-xl font-semibold mb-2">{p.name}</h3>
        <p className="text-gray-700 text-sm">{p.description}</p>
      </div>
    ))}
  </div>
</section>


        {/* Crochet Tips */}
        <section className="my-12 px-4 md:px-0">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Tips for Beginners</h2>
          <ul className="list-disc pl-5 text-gray-700 mb-6">
            <li>Start with simple stitches and small projects.</li>
            <li>Choose medium-weight yarn and a comfortable hook.</li>
            <li>Keep track of stitches to avoid mistakes.</li>
            <li>Watch online tutorials and join crochet communities for guidance.</li>
            <li>Practice patience — crochet is a skill that improves with time.</li>
          </ul>
        </section>

        {/* Resources & Community */}
        <section className="my-12 px-4 md:px-0">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Crochet Resources & Community</h2>
          <p className="text-gray-700 mb-2">
            Connect with the global crochet community to learn, share, and get inspired:
          </p>
          <ul className="list-disc pl-5 text-gray-700 mb-6">
            <li><b>Ravelry:</b> Online forum for patterns, tutorials, and sharing creations.</li>
            <li><b>YouTube:</b> Free step-by-step tutorials for beginners and advanced crocheters.</li>
            <li><b>Blogs & Crochet Guilds:</b> Inspiration, workshops, and networking with fellow enthusiasts.</li>
          </ul>
        </section>

        {/* Fun Facts */}
        <section className="my-12 px-4 md:px-0">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Fun Crochet Facts</h2>
          <ul className="list-disc pl-5 text-gray-700 mb-6">
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
