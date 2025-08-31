import { useState } from 'react';

interface ColumnSelectorProps {
  availableFields: string[];
  selectedFields: string[];
  onSave: (fields: string[]) => void;
  onCancel: () => void;
}

export default function ColumnSelector({
  availableFields,
  selectedFields,
  onSave,
  onCancel,
}: ColumnSelectorProps) {
  const [localSelection, setLocalSelection] =
    useState<string[]>(selectedFields);

  const toggleField = (field: string) => {
    setLocalSelection((prev) =>
      prev.includes(field) ? prev.filter((f) => f !== field) : [...prev, field]
    );
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Select Extra Fields</h2>
      <div className="max-h-60 overflow-y-auto space-y-2">
        {availableFields.map((field) => (
          <label key={field} className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={localSelection.includes(field)}
              onChange={() => toggleField(field)}
              className="h-4 w-4"
            />
            <span>{field}</span>
          </label>
        ))}
      </div>
      <div className="mt-4 flex justify-end space-x-2">
        <button
          onClick={onCancel}
          className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
        >
          Cancel
        </button>
        <button
          onClick={() => onSave(localSelection)}
          className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600"
        >
          Save
        </button>
      </div>
    </div>
  );
}
