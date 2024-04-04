import React, { useRef, useState } from 'react'

const nfts = [
  {
    "name": "Digital Sunrise",
    "artist": "Ava Digital",
    "description": "A mesmerizing digital representation of a sunrise over a digital landscape.",
    "edition": 1,
    "year": 2023,
    "price": 5.0,
    "currency": "ETH",
    "image": "https://res.cloudinary.com/dzfc0ty7q/image/upload/v1712230001/green-app/9_ehe5cz.webp"
  },
  {
    "name": "Neon Dreams",
    "artist": "Max Pixel",
    "description": "Vibrant neon colors blend together in this surreal depiction of dreams.",
    "edition": 1,
    "year": 2022,
    "price": 3.5,
    "currency": "BTC",
    "image": "https://res.cloudinary.com/dzfc0ty7q/image/upload/v1712230001/green-app/10_ezmslg.webp"
  },
  {
    "name": "Crypto Cosmos",
    "artist": "Stella Byte",
    "description": "Explore the depths of the crypto cosmos with this interactive digital artwork.",
    "edition": 1,
    "year": 2024,
    "price": 8.0,
    "currency": "ETH",
    "image": "https://res.cloudinary.com/dzfc0ty7q/image/upload/v1712230001/green-app/4_nfaux5.webp"
  },
  {
    "name": "Pixelated Paradise",
    "artist": "Pixel Master",
    "description": "Escape to a pixelated paradise where reality and imagination intertwine.",
    "edition": 1,
    "year": 2023,
    "price": 6.2,
    "currency": "ETH",
    "image": "https://res.cloudinary.com/dzfc0ty7q/image/upload/v1712230001/green-app/8_ha5rcd.webp"
  },
  {
    "name": "Digital Dystopia",
    "artist": "Cyber Visionary",
    "description": "A haunting vision of a future where technology dominates every aspect of life.",
    "edition": 1,
    "year": 2024,
    "price": 4.8,
    "currency": "BTC",
    "image": "https://res.cloudinary.com/dzfc0ty7q/image/upload/v1712230000/green-app/7_bny7fa.webp"
  },
  {
    "name": "Techno Wonderland",
    "artist": "Byte Beat",
    "description": "Immerse yourself in the pulsating rhythms of this futuristic techno wonderland.",
    "edition": 1,
    "year": 2023,
    "price": 7.5,
    "currency": "ETH",
    "image": "https://res.cloudinary.com/dzfc0ty7q/image/upload/v1712230000/green-app/5_xcrzch.webp"
  },
  {
    "name": "Virtual Visions",
    "artist": "Dream Weaver",
    "description": "Journey through virtual landscapes and unlock hidden realms of imagination.",
    "edition": 1,
    "year": 2022,
    "price": 5.5,
    "currency": "BTC",
    "image": "https://res.cloudinary.com/dzfc0ty7q/image/upload/v1712230000/green-app/6_vwc8w0.webp"
  },
  {
    "name": "Future Fusion",
    "artist": "NFT Ninja",
    "description": "Witness the fusion of traditional and digital art forms in this groundbreaking masterpiece.",
    "edition": 1,
    "year": 2024,
    "price": 9.2,
    "currency": "ETH",
    "image": "https://res.cloudinary.com/dzfc0ty7q/image/upload/v1712230000/green-app/1_scdilh.webp"
  },
  {
    "name": "Cybernetic Symphony",
    "artist": "Digital Maestro",
    "description": "Experience the harmonious blend of technology and music in this cybernetic symphony.",
    "edition": 1,
    "year": 2023,
    "price": 6.9,
    "currency": "BTC",
    "image": "https://res.cloudinary.com/dzfc0ty7q/image/upload/v1712230000/green-app/3_jlclhf.webp"
  },
  {
    "name": "Abstract Algorithm",
    "artist": "Code Canvas",
    "description": "Delve into the complex patterns and algorithms that form the basis of this abstract masterpiece.",
    "edition": 1,
    "year": 2024,
    "price": 4.0,
    "currency": "ETH",
    "image": "https://res.cloudinary.com/dzfc0ty7q/image/upload/v1712230000/green-app/2_xumahl.webp"
  }
]


type nftImage = {
  original: File | null,
  base64: string | null,
}

const Home: React.FC = () => {
  const imagePreviewRef = useRef(null)
  const [activeTab, setActiveTab] = useState(0);
  const [nftImage, setNftImage] = useState<nftImage>({
    original: null,
    base64: null,
  });


  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const image = e.target?.result;
        if (image) {
          // Handle the image data
          setNftImage({
            original: file,
            base64: image.toString(),
          });
        }
      };
      reader.readAsDataURL(file);
    }
  }

  const handleImageReset = () => {
    if (imagePreviewRef.current) {
      (imagePreviewRef.current as HTMLImageElement).src = '';
      
      setNftImage({
        original: null,
        base64: null,
      })
    }
  }
  return (
    <div className="w-full bg-slate-900">
      <div className="w-full p-3 bg-slate-600 flex justify-between">
        <h1 className='text-xl font-bold text-white'>Suraj NFT</h1>
        <nav className='text-white'>
          <ul className="flex gap-4">
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </nav>
      </div>
      <div className="w-full p-3 mt-6">
        <div className="w-full border-b flex">
          <div className={`w-fit hover:bg-slate-800 ${activeTab === 0 ? "bg-blue-500" : ""} p-2 px-3 rounded-t-lg cursor-pointer`} onClick={() => setActiveTab(0)}>
            <h1 className='text-white text-lg font-medium'>My NFTS</h1>
            <p className='text-white text-sm'>View your NFTs here</p>
          </div>
          <div className={`w-fit hover:bg-slate-800 ${activeTab === 1 ? "bg-blue-500" : ""} p-2 px-3 rounded-t-lg cursor-pointer`} onClick={() => setActiveTab(1)}>
            <h1 className='text-white text-lg font-medium'>Upload NFT</h1>
            <p className='text-white text-sm'>Upload your NFTs here</p>
          </div>
        </div>
        {activeTab === 0 && (
          <div className="w-full flex flex-wrap gap-4 mt-8">
            {nfts.map((nft, index) => (
              <div className="flex-1 basis-[280px] shrink-0 grow-0 bg-slate-700 text-white rounded-md overflow-hidden" key={index}>
                <img src={nft.image} alt={nft.name} className='h-[280px] object-contain'/>
                <div className="w-full p-2">
                  <h1>{nft.name}</h1>
                  <p>{nft.description.slice(0, 50)}...</p>
                  <p>Edition: {nft.edition}</p>
                  <p>Year: {nft.year}</p>
                  <p>Price: {nft.price} {nft.currency}</p>
                  <p>Artist: {nft.artist}</p>
                  <button className='bg-blue-500 text-white p-2 rounded-md w-full mt-4'>Mint NFT</button>
                </div>
              </div>
            ))}
          </div>
        )}
        {activeTab === 1 && (
          <div className="w-full flex flex-col items-center justify-center mt-8">
            <label htmlFor="upload_image" className='w-6/12 p-4 border border-dashed border-blue-400 flex items-center justify-center gap-2 cursor-pointer hover:border-blue-600 bg-slate-800 hover:bg-slate-700 rounded-md'>
              <input key={nftImage.base64 ? "imageExist" : "imageNotexist"} type="file" id="upload_image" className="hidden" onChange={handleImageUpload}/>
              <img width="50" height="50" src="https://img.icons8.com/pulsar-color/96/add-image.png" alt="add-image" />
              <span className='text-white text-2xl'>Upload Image</span>
              
            </label>
            {nftImage.original && (
              <div className="w-full px-20 mt-8 flex justify-center">
              <div className="w-[400px] h-[400px]">
                <img src={nftImage.base64!} alt="uploaded_image" className="w-full h-full object-contain" ref={imagePreviewRef}/>
                {/* <button className='bg-blue-500 text-white p-2 rounded-md w-full mt-4'>Mint NFT</button> */}
              </div>
              <div className="w-fit px-20 mt-8">
                  <p className="text-white mt-2">{nftImage.original.name}</p>
                  <p className="text-white mt-2">{nftImage.original.size * 0.001}KB</p>
                  <div className="w-full flex gap-2">

                  
                  <button className='bg-blue-500 text-white p-3 rounded-md px-6 mt-4'>Upload</button>
                    <button className='border border-red-500 text-red-500 p-3 rounded-md px-6 mt-4' onClick={handleImageReset}>Cancel</button>
                  </div>
              </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home