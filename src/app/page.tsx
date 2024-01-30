import Image from "next/image";
import Link from "next/link";
import { ProgramSummary } from "./components/program-summary";

export default function Home() {
  return (
    <>
      <header className="p-3 shadow">
        <Image
          src="/img/master-academy-logo.svg"
          alt="Master Academy Logo"
          width={200}
          height={80}
          priority
        />
      </header>
      <main>
        <section className="p-5 flex flex-wrap items-center justify-center bg-gradient-to-r from-violet-500 to-fuchsia-500">
          <div>
            <header className="text-slate-50 mb-3">
              <strong className="text-2xl font-thin">
                Probably the best practical course to become a
              </strong>
              <h1 className="text-4xl">FRONT-END WEB DEVELOPER</h1>
              <h1 className="text-4xl">FULL-STACK WEB DEVELOPER</h1>
              <h1 className="text-4xl">or ANY SOFTWARE DEVELOPER</h1>
              <div className="flex gap-2">
                <strong className="text-2xl font-thin">
                  from industry experts
                </strong>
                <Link href="/program" className="btn-accent">
                  → Program Detail
                </Link>
              </div>
            </header>
          </div>
          <div className="lg:w-1/3">
          
          </div>
        </section>

        <section className="flex justify-center py-3 bg-gradient-to-r from-violet-500 to-fuchsia-500">
              <Image
                src="/img/simplified-program-flow-dark-mode.png"
                alt="Full Stack developer program overview"
                width={1200}
                height={80}
              />
        </section>

        <section>
          <ProgramSummary></ProgramSummary>
        </section>
      </main>
    </>
  );
}
