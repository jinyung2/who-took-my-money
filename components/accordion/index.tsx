import React, {
  Dispatch,
  PropsWithChildren,
  ReactNode,
  SetStateAction,
} from "react";
import {
  Root,
  Item,
  Trigger,
  Content,
  AccordionItemProps as RadixItemProps,
  AccordionMultipleProps,
} from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";

type AccordionItemProps = RadixItemProps;

type AccordionProps = {
  onValueChange?: AccordionMultipleProps["onValueChange"];
  value: AccordionMultipleProps["value"];
  items: Array<AccordionItemProps>;
};
const Accordion: React.FC<AccordionProps> = ({
  onValueChange,
  value,
  items,
}) => {
  return (
    <Root
      onValueChange={onValueChange}
      type="multiple"
      className="w-full border-white border rounded"
      value={value}
    >
      {items.map(({ value, children, title }) => (
        <Item key={value} value={value} className="border-b last:border-none">
          <Trigger className="flex items-center gap-4 px-6 py-4 w-full">
            <ChevronDownIcon width={24} height={24} /> {title}
          </Trigger>
          <Content className="p-6 pt-0">{children}</Content>
        </Item>
      ))}
    </Root>
  );
};

export default Accordion;
