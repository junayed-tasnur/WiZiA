import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const testimonials = [
  {
    descript: "Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    name: "John Doe",
    position: "Chief Strategy Officer @amazon",
  },
  {
    descript: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet nulla et sapien bibendum, ac volutpat nulla tristique.",
    name: "Jane Smith",
    position: "CEO @Facebook",
  },
  {
    descript: "Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.",
    name: "Michael Brown",
    position: "Marketing Director @Google",
  },
];

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);

  const prevTestimonial = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex flex-col max-w-[1400px] mx-auto items-center justify-center p-6">
      <Card className="text-center p-6 !bg-[#002228] !border-none !shadow-none relative transition-all duration-2000 -mb-8">
        <CardContent>
          <FormatQuoteIcon className="text-4xl text-tcolr" />
          <p className="text-lg mt-4 text-gray-300 max-w-md mx-auto">{testimonials[index].descript}</p>
          <h3 className="text-cyan-400 font-semibold mt-4">
            {testimonials[index].name}
          </h3>
          <p className="text-gray-400 text-sm mt-1.5">
            {testimonials[index].position}
          </p>
        </CardContent>
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 cursor-pointer bg-[#96ACAF33] p-1 sm:p-2 rounded-full mt-12 "
          onClick={prevTestimonial}
          aria-label="Previous Testimonial"
        >
          <ArrowBackIcon className="text-3xl text-tcolr hover:text-cyan-400" />
        </button>
        <button
          className="absolute top-1/2 mt-12 right-0 transform -translate-y-1/2 cursor-pointer bg-[#96ACAF33] p-1 sm:p-2 rounded-full"
          onClick={nextTestimonial}
          aria-label="Next Testimonial"
        >
          <ArrowForwardIcon className="text-3xl text-tcolr" />
        </button>
      </Card>
      <div className="relative flex mt-4 space-x-2">
        {testimonials.map((_, i) => (
          <span
            key={i}
            className={`w-3 h-3 rounded-full ${
              i === index ? "bg-cyan-400" : "bg-gray-600"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
}