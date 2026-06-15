import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen text-white overflow-hidden relative">
      <Head>
        <title>Retro Coin - The Future of Nostalgia</title>
        <link rel="icon" href="retroCoin.png" />
      </Head>

      {/* Hero background image - only visible in hero section */}
      <div className="absolute inset-0 h-screen">
        <img
          src="/hero.png"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/60 via-zinc-900/40 to-zinc-900" />
      </div>

      {/* Starfield background - scrolls with page */}
      <div className="absolute inset-0 bg-zinc-950 pointer-events-none" style={{
        clipPath: 'polygon(0 15%, 100% 15%, 100% 100%, 0% 100%)',
      }}>
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(2px 2px at 20px 30px, #fff, transparent),
            radial-gradient(2px 2px at 40px 70px, rgba(255,255,255,0.8), transparent),
            radial-gradient(1px 1px at 90px 40px, #fff, transparent),
            radial-gradient(2px 2px at 160px 120px, rgba(255,255,255,0.9), transparent),
            radial-gradient(1px 1px at 230px 80px, #fff, transparent),
            radial-gradient(2px 2px at 300px 150px, rgba(255,255,255,0.7), transparent),
            radial-gradient(1px 1px at 350px 200px, #fff, transparent),
            radial-gradient(2px 2px at 420px 50px, rgba(255,255,255,0.8), transparent),
            radial-gradient(1px 1px at 500px 180px, #fff, transparent),
            radial-gradient(2px 2px at 580px 90px, rgba(255,255,255,0.9), transparent),
            radial-gradient(1px 1px at 650px 250px, #fff, transparent),
            radial-gradient(2px 2px at 720px 30px, rgba(255,255,255,0.7), transparent),
            radial-gradient(1px 1px at 100px 300px, #fff, transparent),
            radial-gradient(2px 2px at 200px 350px, rgba(255,255,255,0.8), transparent),
            radial-gradient(1px 1px at 350px 280px, #fff, transparent),
            radial-gradient(2px 2px at 480px 320px, rgba(255,255,255,0.9), transparent),
            radial-gradient(1px 1px at 600px 380px, #fff, transparent),
            radial-gradient(2px 2px at 750px 340px, rgba(255,255,255,0.7), transparent)
          `,
          backgroundSize: '800px 400px',
          animation: 'stars 60s linear infinite',
        }} />
        
        {/* Perspective grid floor */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2" style={{
          backgroundImage: `
            linear-gradient(to top, transparent 0%, rgba(234,179,8,0.1) 100%),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 49px,
              rgba(234,179,8,0.3) 50px
            ),
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 49px,
              rgba(234,179,8,0.3) 50px
            )
          `,
          transform: 'perspective(500px) rotateX(60deg)',
          transformOrigin: 'bottom',
        }} />
      </div>

      {/* Scanlines overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-5"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.5) 2px, rgba(0,0,0,0.5) 4px)',
        }}
      />

      {/* Hero Section */}
      <div className="relative min-h-screen flex flex-col items-center justify-center p-8 text-center z-10">
        {/* Background glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[500px] h-[500px] bg-yellow-500 rounded-full blur-[150px] opacity-30" />
        </div>

        {/* Logo */}
        <div className="relative mb-8" style={{
          animation: 'float 3s ease-in-out infinite',
        }}>
          <Image
            src="/retroCoin.png"
            alt="Retro Coin Logo"
            width={200}
            height={200}
            className=""
            priority
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-wider" style={{ fontFamily: "'Press Start 2P', monospace", textShadow: '5px 5px 0 #000, 0 0 30px rgba(234,179,8,0.5)' }}>
          <span className="text-yellow-400">RETRO</span>
          <span className="text-white">COIN</span>
        </h1>

        <p className="text-lg md:text-xl text-yellow-300 mb-8 uppercase tracking-widest" style={{ fontFamily: "'Press Start 2P', monospace" }}>
          The Solana Gaming Revolution
        </p>

        <div className="flex flex-col md:flex-row gap-6 mb-16">
          <button className="px-8 py-5 bg-yellow-400 hover:bg-yellow-300 text-black font-bold uppercase border-4 border-t-white border-l-white border-r-black border-b-black transition-all hover:translate-y-1 hover:shadow-[6px_6px_0_rgba(0,0,0,1)]" style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '12px' }}>
            Buy $RETRO
          </button>
          <button className="px-8 py-5 bg-cyan-400 hover:bg-cyan-300 text-black font-bold uppercase border-4 border-t-white border-l-white border-r-black border-b-black transition-all hover:translate-y-1 hover:shadow-[6px_6px_0_rgba(0,0,0,1)]" style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '12px' }}>
            Read Whitepaper
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 max-w-3xl w-full">
          <div className="text-center p-5 border-4 border-yellow-400 bg-zinc-900/80 backdrop-blur-sm" style={{ boxShadow: '0 0 20px rgba(234,179,8,0.3), inset 0 0 20px rgba(0,0,0,0.5)' }}>
            <div className="text-2xl md:text-3xl font-bold text-yellow-400 mb-2" style={{ fontFamily: "'Press Start 2P', monospace" }}>$0.042</div>
            <div className="text-xs text-zinc-400 uppercase tracking-wider">Price (SOL)</div>
          </div>
          <div className="text-center p-5 border-4 border-green-400 bg-zinc-900/80 backdrop-blur-sm" style={{ boxShadow: '0 0 20px rgba(34,197,94,0.3), inset 0 0 20px rgba(0,0,0,0.5)' }}>
            <div className="text-2xl md:text-3xl font-bold text-green-400 mb-2" style={{ fontFamily: "'Press Start 2P', monospace" }}>69K</div>
            <div className="text-xs text-zinc-400 uppercase tracking-wider">Hodlers</div>
          </div>
          <div className="text-center p-5 border-4 border-cyan-400 bg-zinc-900/80 backdrop-blur-sm" style={{ boxShadow: '0 0 20px rgba(34,211,238,0.3), inset 0 0 20px rgba(0,0,0,0.5)' }}>
            <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-2" style={{ fontFamily: "'Press Start 2P', monospace" }}>SOLANA</div>
            <div className="text-xs text-zinc-400 uppercase tracking-wider">Chain</div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 animate-bounce">
          <div className="text-yellow-400 text-4xl">▼</div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-24 px-8 relative bg-zinc-900/80 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12 text-yellow-400" style={{ fontFamily: "'Press Start 2P', monospace", textShadow: '4px 4px 0 #000' }}>
            WHAT IS RETRO COIN?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 border-4 border-yellow-400 bg-zinc-900/90 backdrop-blur-sm" style={{ boxShadow: '8px 8px 0 rgba(234,179,8,0.3)' }}>
              <h3 className="text-lg font-bold text-yellow-300 mb-4" style={{ fontFamily: "'Press Start 2P', monospace" }}>🎮 GAMING ECOSYSTEM</h3>
              <p className="text-zinc-300 leading-relaxed">
                Earn $RETRO every time you level up in supported Solana games. Our lightning-fast reward system delivers instant, feeless gaming rewards thanks to Solana's 65k TPS.
              </p>
            </div>
            
            <div className="p-6 border-4 border-cyan-400 bg-zinc-900/90 backdrop-blur-sm" style={{ boxShadow: '8px 8px 0 rgba(34,211,238,0.3)' }}>
              <h3 className="text-lg font-bold text-cyan-300 mb-4" style={{ fontFamily: "'Press Start 2P', monospace" }}>🕹️ NOSTALGIA PROTOCOL</h3>
              <p className="text-zinc-300 leading-relaxed">
                Built on the memories of 8-bit adventures, Retro Coin bridges the gap between classic gaming and modern DeFi on Solana. Every transaction writes a new chapter.
              </p>
            </div>
            
            <div className="p-6 border-4 border-pink-400 bg-zinc-900/90 backdrop-blur-sm" style={{ boxShadow: '8px 8px 0 rgba(236,72,153,0.3)' }}>
              <h3 className="text-lg font-bold text-pink-300 mb-4" style={{ fontFamily: "'Press Start 2P', monospace" }}>🏆 PLAY TO EARN</h3>
              <p className="text-zinc-300 leading-relaxed">
                The ultimate Solana gaming token. Stake your $RETRO, unlock exclusive in-game items, and compete in tournaments with massive prize pools in USDC.
              </p>
            </div>
            
            <div className="p-6 border-4 border-green-400 bg-zinc-900/90 backdrop-blur-sm" style={{ boxShadow: '8px 8px 0 rgba(34,197,94,0.3)' }}>
              <h3 className="text-lg font-bold text-green-300 mb-4" style={{ fontFamily: "'Press Start 2P', monospace" }}>🚀 TO THE MOON</h3>
              <p className="text-zinc-300 leading-relaxed">
                Join the community of retro enthusiasts. With only 690,000,000 coins and a deflationary burn mechanism, $RETRO is designed for long-term hodling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section className="py-20 px-8 bg-gradient-to-b from-zinc-900/80 to-zinc-950/80">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-black mb-8 text-cyan-400" style={{ fontFamily: "'Press Start 2P', monospace", textShadow: '4px 4px 0 #000' }}>
            📊 TOKENOMICS
          </h2>
          
          <div className="grid md:grid-cols-4 gap-4">
            <div className="p-4 border-4 border-yellow-400 bg-zinc-900">
              <div className="text-lg font-bold text-yellow-400" style={{ fontFamily: "'Press Start 2P', monospace" }}>690M</div>
              <div className="text-xs text-zinc-400 uppercase">Total Supply</div>
            </div>
            <div className="p-4 border-4 border-cyan-400 bg-zinc-900">
              <div className="text-lg font-bold text-cyan-400" style={{ fontFamily: "'Press Start 2P', monospace" }}>5%</div>
              <div className="text-xs text-zinc-400 uppercase">Game Rewards</div>
            </div>
            <div className="p-4 border-4 border-pink-400 bg-zinc-900">
              <div className="text-lg font-bold text-pink-400" style={{ fontFamily: "'Press Start 2P', monospace" }}>3%</div>
              <div className="text-xs text-zinc-400 uppercase">Auto LP</div>
            </div>
            <div className="p-4 border-4 border-green-400 bg-zinc-900">
              <div className="text-lg font-bold text-green-400" style={{ fontFamily: "'Press Start 2P', monospace" }}>2%</div>
              <div className="text-xs text-zinc-400 uppercase">Marketing</div>
            </div>
          </div>
        </div>
      </section>

      {/* Retro Games Section */}
      <section className="py-20 px-8 bg-zinc-950/80 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-black mb-8 text-pink-400" style={{ fontFamily: "'Press Start 2P', monospace", textShadow: '4px 4px 0 #000' }}>
            🎮 PLAY RETRO GAMES
          </h2>
          
          <div className="p-8 border-4 border-pink-400 bg-zinc-900/90 backdrop-blur-sm mb-8" style={{ boxShadow: '10px 10px 0 rgba(236,72,153,0.4)' }}>
            <div className="mb-6">
              <Image
                src="/flappy.gif"
                alt="Flappy Bird"
                width={100}
                height={100}
                className="mx-auto"
                unoptimized
              />
            </div>
            <h3 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "'Press Start 2P', monospace" }}>FLAPPY BIRD</h3>
            <p className="text-zinc-400 mb-6">
              Navigate through pipes and earn bonus $RETRO! The first retro game in our ecosystem.
            </p>
            <Link href="/game">
              <button className="px-6 py-4 bg-yellow-400 hover:bg-yellow-300 text-black font-bold uppercase border-4 border-t-white border-l-white border-r-black border-b-black transition-all hover:translate-y-1 hover:shadow-[6px_6px_0_rgba(0,0,0,1)]" style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '11px' }}>
                ▶ PLAY NOW
              </button>
            </Link>
          </div>

          <p className="text-zinc-500 text-xs" style={{ fontFamily: "'Press Start 2P', monospace" }}>
            Press SPACE or tap to flap • Earn $RETRO rewards
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-8 bg-yellow-400 border-t-8 border-black relative">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.2) 10px, rgba(0,0,0,0.2) 20px)',
        }} />
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Image src="/retroCoin.png" alt="Retro Coin" width={50} height={50} />
            <span className="font-black text-black text-xl" style={{ fontFamily: "'Press Start 2P', monospace" }}>RETROCOIN</span>
          </div>
          <p className="text-black text-xs mb-4" style={{ fontFamily: "'Press Start 2P', monospace" }}>
            BUILT ON SOLANA • POWERED BY COMMUNITY
          </p>
          <div className="flex justify-center gap-4">
            <a href="#" className="w-10 h-10 bg-black flex items-center justify-center text-yellow-400 font-bold hover:bg-zinc-800 transition-colors" style={{ fontFamily: "'Press Start 2P', monospace" }}>𝕏</a>
            <a href="#" className="w-10 h-10 bg-black flex items-center justify-center text-yellow-400 font-bold hover:bg-zinc-800 transition-colors" style={{ fontFamily: "'Press Start 2P', monospace" }}>TG</a>
            <a href="#" className="w-10 h-10 bg-black flex items-center justify-center text-yellow-400 font-bold hover:bg-zinc-800 transition-colors" style={{ fontFamily: "'Press Start 2P', monospace" }}>DC</a>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes stars {
          0% { background-position: 0 0; }
          100% { background-position: 800px 400px; }
        }
      `}</style>
    </div>
  );
};

export default Home;
