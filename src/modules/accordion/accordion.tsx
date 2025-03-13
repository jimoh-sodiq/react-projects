import { useState } from "react";
import { accordionData } from "./data";

export default function Accordion() {
  const [selectedId, setSelectedId] = useState<undefined | number>(undefined);
  const [enableMultipleSelection, setEnableMultipleSelection] = useState(true);
  const [multipleSelected, setMultipleSelected] = useState<number[]>([]);

  const handleSingleSelection = (id: number) => {
    if (selectedId == id) {
      setSelectedId(undefined);
      return;
    }
    setSelectedId(id);
  };

  const handleMultipleSelection = (id: number) => {
    if (multipleSelected.includes(id)) {
      setMultipleSelected(multipleSelected.filter((num) => num !== id));
      return;
    }
    setMultipleSelected([...multipleSelected, id]);
  };

  const handleSelection = (id: number) => {
    if (enableMultipleSelection) {
      handleMultipleSelection(id);
    } else {
      handleSingleSelection(id);
    }
  };

  const toggleEnableMultiple = () => {
    setSelectedId(undefined)
    setMultipleSelected([])
    setEnableMultipleSelection(!enableMultipleSelection)
  }

  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-medium text-xl">Accordion FAQ Demo</h1>
      <button
      className='w-fit rounded px-4 py-2.5 bg-green-700 cursor-pointer text-white text-sm font-medium'
        onClick={toggleEnableMultiple}
      >
        {enableMultipleSelection ? "Disable Multiple" : "Enable Multiple"}
      </button>
      <div className="flex flex-col gap-4 max-w-3xl">
        {accordionData && accordionData.length > 0 ? (
          accordionData.map((item) => (
            <div key={item.id} className="p-4 bg-gray-700 text-white rounded flex flex-col gap-2.5">
              <div
                onClick={() => handleSelection(item.id)}
                className="cursor-pointer flex items-center gap-6 justify-between"
              >
                <h3 className="font-semibold">{item.question}</h3>
                <span className="font-bold text-xl">
                  {selectedId === item.id ? "-" : "+"}
                </span>
              </div>
              {(enableMultipleSelection
                ? multipleSelected.includes(item.id)
                : selectedId === item.id) && (
                <p className="text-sm text-green-300 font-medium">
                  {item.answer}
                </p>
              )}
            </div>
          ))
        ) : (
          <p>No data found</p>
        )}
      </div>
    </div>
  );
}
