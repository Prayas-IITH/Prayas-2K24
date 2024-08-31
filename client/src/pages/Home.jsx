import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import dummy from "../../public/Dummy.jpg";
import "@splidejs/splide/dist/css/splide.min.css";
import "@splidejs/react-splide/css";
import "../index.css"

function About() {
    return (
        <div className="flex flex-col mx-auto">
            <div className="text-[#f9f6f0] p-4 flex flex-col mx-4 my-2 items-center">
                <div className="w-3/4 my-4">
                    <Splide
                        options={{
                            type: 'loop',
                            perPage: 3,
                            gap: 8,
                            autoScroll: {
                                pauseOnHover: false,
                                pauseOnFocus: false,
                                rewind: false,
                                speed: 1,
                            },
                        }}
                        extensions={{ AutoScroll }}
                    >
                        <SplideSlide>
                            <img src={dummy} alt="Image 1" />
                        </SplideSlide>
                        <SplideSlide>
                            <img src={dummy} alt="Image 2" />
                        </SplideSlide>
                        <SplideSlide>
                            <img src={dummy} alt="Image 3" />
                        </SplideSlide>
                        <SplideSlide>
                            <img src={dummy} alt="Image 4" />
                        </SplideSlide>
                    </Splide>
                </div>
            </div>
            <div className="grid grid-cols-5">
                <img src={dummy} alt="Image 1" className="col-span-2 mx-4 p-4 "/>
                <div className="rounded-xl text-[#f9f6f0] p-4 col-span-3 flex flex-col m-4">
                    <span className="text-4xl font-bold font-serif mx-auto">About Us</span>
                    <br />
                    <span className="text-lg font-sans mx-20">
                        Lorem ipsum dolor sit amet, sea pertinax pertinacia appellantur in,
                        est ad esse assentior mediocritatem, magna populo menandri cum te.
                        Vel augue menandri eu, at integre appareat splendide duo. Est ne
                        tollit ullamcorper, eu pro falli diceret perpetua, sea ferri numquam
                        legendos ut. Diceret suscipiantur at nec, his ei nulla mentitum
                        efficiantur. Errem saepe ei vis. Per melius aperiri eu. Et
                        interesset philosophia vim, graece denique intellegam duo at, te vix
                        quot apeirian dignissim. Ei essent percipitur nam, natum possit
                        interpretaris sea ea. Cum assum adipisci cotidieque ut, ut veri
                        tollit duo. Erat idque volutpat mea ut, mel nominati splendide
                        vulputate ea.
                    </span>
                </div>
            </div>
            <div className="rounded-xl text-[#f9f6f0] p-4 flex flex-col m-4">
                <span className="text-4xl font-bold font-serif mx-auto mb-4">Events</span>
                <div className="flex flex-col gap-4 mx-auto items-center">
                    <div className="flex flex-row gap-4">
                        <img src={dummy} alt="Image 1" className="max-w-80 h-auto object-cover ring-1 ring-[#f5d3b3] rounded-lg"/>
                        <img src={dummy} alt="Image 2" className="max-w-80 h-auto object-cover ring-1 ring-[#f5d3b3] rounded-lg"/>
                    </div>

                    <div className="flex flex-row gap-4">
                        <img src={dummy} alt="Image 3" className="max-w-80 h-auto object-cover ring-1 ring-[#f5d3b3] rounded-lg"/>
                        <img src={dummy} alt="Image 4" className="max-w-80 h-auto object-cover ring-1 ring-[#f5d3b3] rounded-lg m-2"/>
                        <img src={dummy} alt="Image 5" className="max-w-80 h-auto object-cover ring-1 ring-[#f5d3b3] rounded-lg"/>
                    </div>

                    <div className="flex flex-row gap-4">
                        <img src={dummy} alt="Image 6" className="max-w-80 h-auto object-cover ring-1 ring-[#f5d3b3] rounded-lg"/>
                        <img src={dummy} alt="Image 7" className="max-w-80 h-auto object-cover ring-1 ring-[#f5d3b3] rounded-lg"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
