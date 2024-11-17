import { Disclosure } from "@headlessui/react";

const PlaysFilter = () => {
  return (
    <Disclosure>
      <Disclosure.Button className="py-2">
        Is team pricing available?
      </Disclosure.Button>
      <Disclosure.Panel className="text-gray-500">
        Yes! You can purchase a license that you can share with your entire
        team.
      </Disclosure.Panel>
    </Disclosure>
  );
};

export default PlaysFilter;
