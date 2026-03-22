import Link from "next/link";
import { ArrowRight, Sparkles, Zap, Shield, PieChart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function LandingPage() {
  return (
    <div className="relative flex flex-col pt-16 bg-background min-h-screen overflow-hidden selection:bg-primary/30 selection:text-primary font-sans">
      
      {/* ─── Enhanced Ambient Glows witha Animation ─── */}
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-neon-blue/15 blur-[150px] rounded-full pointer-events-none animate-glow-pulse" />
      <div className="absolute top-[20%] right-[-5%] w-[50%] h-[50%] bg-neon-purple/10 blur-[140px] rounded-full pointer-events-none animate-glow-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-[5%] right-[-5%] w-[40%] h-[40%] bg-neon-pink/15 blur-[150px] rounded-full pointer-events-none animate-glow-pulse" style={{ animationDelay: '2s' }} />

      {/* ───── Hero Section ───── */}
      <section className="relative mt-32 pb-32 space-y-16 px-6">
        <div className="container mx-auto text-center space-y-10">
          <Badge 
            variant="outline" 
            className="py-2.5 px-6 glass-card text-primary border-primary/30 neon-border animate-float lowercase tracking-tight text-sm"
          >
            <Sparkles className="mr-2 h-4 w-4 fill-primary/30" />
            Simple. Fair. Automatic.
          </Badge>

          <h1 className="gradient-title mx-auto max-w-6xl text-7xl font-[900] md:text-[10rem] leading-[0.85] tracking-tighter italic drop-shadow-[0_0_40px_rgba(0,210,255,0.4)]">
            Split bills, <br /> stay friends.
          </h1>

          <p className="mx-auto max-w-[700px] text-foreground/70 md:text-2xl font-medium leading-relaxed">
            Ditch the mental math. We handle the bills so you can stay 
            focused on the moments that actually matter.
          </p>

          <div className="flex flex-col items-center gap-6 sm:flex-row justify-center pt-10">
            <Button 
              asChild 
              size="lg" 
              className="gradient-glow border-none px-12 py-8 text-2xl font-bold rounded-2xl group shadow-2xl text-black hover:scale-105 transition-transform"
            >
              <Link href="/dashboard" className="flex items-center">
                Get Started Free
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button 
              asChild 
              variant="ghost" 
              size="lg" 
              className="glass-card text-foreground hover:text-white hover:bg-white/10 px-12 py-8 text-2xl font-semibold rounded-2xl transition-all border-primary/20 hover:border-primary/40"
            >
              <Link href="#features">See How It Works</Link>
            </Button>
          </div>
        </div>

        {/* Floating Feature Cards - Modern Alternative */}
        <div className="container mx-auto max-w-6xl mt-32 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
            {/* Card 1: Quick Split */}
            <div className="glass-card-strong rounded-3xl p-8 space-y-4 hover:scale-105 transition-transform duration-500 group">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-neon-purple flex items-center justify-center shadow-[0_0_25px_rgba(0,210,255,0.4)] group-hover:shadow-[0_0_35px_rgba(0,210,255,0.6)] transition-all">
                <Zap className="h-8 w-8 text-black fill-black" />
              </div>
              <h3 className="text-2xl font-bold text-white">Snap & Split</h3>
              <p className="text-muted-foreground leading-relaxed">Take a photo of any receipt and we'll divide it instantly among your group.</p>
            </div>

            {/* Card 2: Track Everything */}
            <div className="glass-card-strong rounded-3xl p-8 space-y-4 hover:scale-105 transition-transform duration-500 group md:translate-y-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-neon-purple to-accent flex items-center justify-center shadow-[0_0_25px_rgba(255,0,127,0.4)] group-hover:shadow-[0_0_35px_rgba(255,0,127,0.6)] transition-all">
                <PieChart className="h-8 w-8 text-black fill-black" />
              </div>
              <h3 className="text-2xl font-bold text-white">See the Big Picture</h3>
              <p className="text-muted-foreground leading-relaxed">Beautiful charts and insights show exactly where your money goes.</p>
            </div>

            {/* Card 3: Stay Secure */}
            <div className="glass-card-strong rounded-3xl p-8 space-y-4 hover:scale-105 transition-transform duration-500 group">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center shadow-[0_0_25px_rgba(0,210,255,0.4)] group-hover:shadow-[0_0_35px_rgba(0,210,255,0.6)] transition-all">
                <Shield className="h-8 w-8 text-black fill-black" />
              </div>
              <h3 className="text-2xl font-bold text-white">Bank-Level Security</h3>
              <p className="text-muted-foreground leading-relaxed">Your financial data is encrypted and protected with military-grade security.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ───── Features: Core Values ───── */}
      <section id="features" className="relative py-40">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-white text-4xl md:text-6xl font-extrabold tracking-tight mb-6 drop-shadow-[0_0_30px_rgba(0,210,255,0.3)]">
            Designed for better living.
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl mb-24 max-w-2xl mx-auto">
            Everything you need to manage shared expenses effortlessly
          </p>
          
          <div className="grid max-w-6xl mx-auto gap-8 md:grid-cols-3">
            <FeatureCard 
              icon={<Zap className="text-black h-7 w-7 fill-black" />} 
              title="Instant Split" 
              desc="Snap a photo or add a bill. We handle the division and notify the group instantly."
            />
            <FeatureCard 
              icon={<Shield className="text-black h-7 w-7 fill-black" />} 
              title="Safe & Private" 
              desc="Your data is your business. We use end-to-end encryption to keep your finances personal."
            />
            <FeatureCard 
              icon={<PieChart className="text-black h-7 w-7 fill-black" />} 
              title="Smart Insights" 
              desc="Visualize your spending habits with simple, beautifully crafted monthly reports."
            />
          </div>
        </div>
      </section>

      {/* ───── How It Works Section ───── */}
      <section id="how-it-works" className="relative py-40 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-24">
            <h2 className="text-white text-4xl md:text-6xl font-extrabold tracking-tight mb-6 drop-shadow-[0_0_30px_rgba(0,210,255,0.3)]">
              Split bills in seconds.
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              Three simple steps to settle up with anyone, anywhere
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid gap-16 md:gap-24">
            {/* Step 1 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-left">
                <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary font-bold text-sm">
                  Step 1
                </div>
                <h3 className="text-4xl md:text-5xl font-bold text-white">
                  Add your expense
                </h3>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Snap a photo of a receipt or manually enter the details. Our AI automatically reads and categorizes everything.
                </p>
              </div>
              <div className="glass-card-strong rounded-3xl p-8 aspect-square flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative text-center space-y-4">
                  <div className="text-8xl">📸</div>
                  <p className="text-2xl font-bold text-white">Snap & Go</p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="glass-card-strong rounded-3xl p-8 aspect-square flex items-center justify-center relative overflow-hidden group md:order-1">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative text-center space-y-4">
                  <div className="text-8xl">👥</div>
                  <p className="text-2xl font-bold text-white">Auto-Split</p>
                </div>
              </div>
              <div className="space-y-6 text-left md:order-2">
                <div className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent font-bold text-sm">
                  Step 2
                </div>
                <h3 className="text-4xl md:text-5xl font-bold text-white">
                  We split it fairly
                </h3>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Choose who's involved and how to split. Equal parts, custom amounts, or percentage-based—your call.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-left">
                <div className="inline-block px-4 py-2 rounded-full bg-neon-purple/10 border border-neon-purple/30 text-neon-purple font-bold text-sm">
                  Step 3
                </div>
                <h3 className="text-4xl md:text-5xl font-bold text-white">
                  Everyone gets notified
                </h3>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Your friends are instantly notified with exactly what they owe. No awkward reminders needed.
                </p>
              </div>
              <div className="glass-card-strong rounded-3xl p-8 aspect-square flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative text-center space-y-4">
                  <div className="text-8xl">✅</div>
                  <p className="text-2xl font-bold text-white">All Set!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── Enhanced CTA Section ───── */}
      <section className="py-60 relative flex items-center justify-center overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-primary/15 blur-[160px] rounded-full animate-glow-pulse" />
        <div className="absolute w-[400px] h-[400px] bg-accent/15 blur-[140px] rounded-full animate-glow-pulse" style={{ animationDelay: '1.5s' }} />
        
        <div className="container relative mx-auto px-4 text-center z-20 space-y-12">
          <h2 className="text-6xl md:text-[10rem] font-black text-white tracking-tighter leading-none">
            Ready to <br /> 
            <span className="gradient-title opacity-40 italic">settle up?</span>
          </h2>
          <Button 
            asChild 
            className="gradient-glow h-20 px-16 text-2xl font-bold rounded-3xl shadow-2xl text-black hover:scale-105 transition-transform"
          >
            <Link href="/dashboard">Create an Account</Link>
          </Button>
        </div>
      </section>

      {/* ───── Enhanced Footer ───── */}
      <footer className="border-t border-white/10 glass-card py-20 text-center">
        <div className="container mx-auto space-y-6">
          <span className="text-3xl font-black gradient-title tracking-tight">DIVVY</span>
          <div className="flex justify-center gap-8 text-white/40 text-xs font-semibold tracking-wide lowercase">
            <Link href="#" className="hover:text-primary transition-colors hover:scale-110 inline-block">Safety</Link>
            <Link href="#" className="hover:text-primary transition-colors hover:scale-110 inline-block">Terms</Link>
            <Link href="#" className="hover:text-primary transition-colors hover:scale-110 inline-block">Privacy</Link>
          </div>
          <p className="text-white/20 text-[10px] tracking-widest uppercase">
            Handcrafted for humans © {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}

// Enhanced Feature Card Component
function FeatureCard({ icon, title, desc }) {
  return (
    <Card className="glass-card-strong text-left group shadow-xl hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 overflow-hidden relative">
      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <CardContent className="p-10 space-y-6 relative z-10">
        <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary via-neon-purple to-accent flex items-center justify-center mb-4 shadow-[0_0_25px_rgba(0,210,255,0.4)] group-hover:shadow-[0_0_35px_rgba(0,210,255,0.6)] group-hover:scale-110 transition-all duration-500">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors tracking-tight italic">
          {title}
        </h3>
        <p className="text-muted-foreground text-lg leading-relaxed group-hover:text-foreground/80 transition-colors">
          {desc}
        </p>
      </CardContent>
    </Card>
  );
}
