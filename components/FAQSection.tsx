"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { MainHeading } from "./ui/textAniamtions";

type Faq = {
  question: string;
  answer: string;
};

interface FaqSectionProps {
  faqs: Faq[];
}

export function FaqSection({ faqs }: FaqSectionProps) {
  return (
    <section className="section-margin">
      <MainHeading text="Frequently Asked Questions" />
      <Accordion.Root type="multiple" defaultValue={[]} className="space-y-4 mt-10">
        {faqs.map(({ question, answer }, i) => (
          <Accordion.Item
            value={`item-${i}`}
            key={i}
            className="border rounded-md border-gray-200"
          >
            <Accordion.Header className="flex">
              <Accordion.Trigger
                className="flex flex-1 items-center justify-between p-5 font-semibold text-gray-900  focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 rounded-md"
              >
                {question}
                <ChevronDown className="h-5 w-5 text-gray-500 transition-transform duration-300 radix-state-open:rotate-180" />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="px-5 pb-5 text-gray-700">
              <p>{answer}</p>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </section>
  );
}
