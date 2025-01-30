
export const fontSize = {
  type: "number",
  label: "Font Size",
}

export const textAlign = {
  type: "radio",
  label: "Text Align",
  options: [
    { label: "Left", value: "start" },
    { label: "Center", value: "center" },
    { label: "Right", value: "end" },
  ],
}

export const headColor = {
  type: "text",
  label: "Heading Text Color"
}
export const bodyColor = {
  type: "text",
  label: "Body Text Color"
}
export const color = {
  type: "text",
}

export const backgroundColor = {
  type: "text",
  label: "BackGround Color"
}

export const padding = {
  type: "text",
}

export const margin = {
  type: "text",
}

export const width = {
  type: "text",
  label: "Width",
}

export const height = {
  type: "text",
}

// TODO for api calling still need to be modified
export const externalData = {
  type: "external",
  fetchList: async () => {
    // ... fetch data from a third party API, or other async source

    return [
      { title: "Hello, world", description: "Lorem ipsum 1" },
      { title: "Goodbye, world", description: "Lorem ipsum 2" },
    ];
  },
}

export const tailwindBgColors = {
  type: "select",
  label: "BackGround Color",
  options: [
    { label: "Transparent", value: "bg-transparent" },
    { label: "Current", value: "bg-current" },
    { label: "Black", value: "bg-black" },
    { label: "White", value: "bg-white" },
    { label: "Gray 100", value: "bg-gray-100" },
    { label: "Gray 200", value: "bg-gray-200" },
    { label: "Gray 300", value: "bg-gray-300" },
    { label: "Gray 400", value: "bg-gray-400" },
    { label: "Gray 500", value: "bg-gray-500" },
    { label: "Gray 600", value: "bg-gray-600" },
    { label: "Gray 700", value: "bg-gray-700" },
    { label: "Gray 800", value: "bg-gray-800" },
    { label: "Gray 900", value: "bg-gray-900" },
    { label: "Red 100", value: "bg-red-100" },
    { label: "Red 200", value: "bg-red-200" },
    { label: "Red 300", value: "bg-red-300" },
    { label: "Red 400", value: "bg-red-400" },
    { label: "Red 500", value: "bg-red-500" },
    { label: "Red 600", value: "bg-red-600" },
    { label: "Red 700", value: "bg-red-700" },
    { label: "Red 800", value: "bg-red-800" },
    { label: "Red 900", value: "bg-red-900" },
    { label: "Orange 100", value: "bg-orange-100" },
    { label: "Orange 200", value: "bg-orange-200" },
    { label: "Orange 300", value: "bg-orange-300" },
    { label: "Orange 400", value: "bg-orange-400" },
    { label: "Orange 500", value: "bg-orange-500" },
    { label: "Orange 600", value: "bg-orange-600" },
    { label: "Orange 700", value: "bg-orange-700" },
    { label: "Orange 800", value: "bg-orange-800" },
    { label: "Orange 900", value: "bg-orange-900" },
    { label: "Yellow 100", value: "bg-yellow-100" },
    { label: "Yellow 200", value: "bg-yellow-200" },
    { label: "Yellow 300", value: "bg-yellow-300" },
    { label: "Yellow 400", value: "bg-yellow-400" },
    { label: "Yellow 500", value: "bg-yellow-500" },
    { label: "Yellow 600", value: "bg-yellow-600" },
    { label: "Yellow 700", value: "bg-yellow-700" },
    { label: "Yellow 800", value: "bg-yellow-800" },
    { label: "Yellow 900", value: "bg-yellow-900" },
    { label: "Green 100", value: "bg-green-100" },
    { label: "Green 200", value: "bg-green-200" },
    { label: "Green 300", value: "bg-green-300" },
    { label: "Green 400", value: "bg-green-400" },
    { label: "Green 500", value: "bg-green-500" },
    { label: "Green 600", value: "bg-green-600" },
    { label: "Green 700", value: "bg-green-700" },
    { label: "Green 800", value: "bg-green-800" },
    { label: "Green 900", value: "bg-green-900" },
    { label: "Teal 100", value: "bg-teal-100" },
    { label: "Teal 200", value: "bg-teal-200" },
    { label: "Teal 300", value: "bg-teal-300" },
    { label: "Teal 400", value: "bg-teal-400" },
    { label: "Teal 500", value: "bg-teal-500" },
    { label: "Teal 600", value: "bg-teal-600" },
    { label: "Teal 700", value: "bg-teal-700" },
    { label: "Teal 800", value: "bg-teal-800" },
    { label: "Teal 900", value: "bg-teal-900" },
    { label: "Blue 100", value: "bg-blue-100" },
    { label: "Blue 200", value: "bg-blue-200" },
    { label: "Blue 300", value: "bg-blue-300" },
    { label: "Blue 400", value: "bg-blue-400" },
    { label: "Blue 500", value: "bg-blue-500" },
    { label: "Blue 600", value: "bg-blue-600" },
    { label: "Blue 700", value: "bg-blue-700" },
    { label: "Blue 800", value: "bg-blue-800" },
    { label: "Blue 900", value: "bg-blue-900" },
    { label: "Indigo 100", value: "bg-indigo-100" },
    { label: "Indigo 200", value: "bg-indigo-200" },
    { label: "Indigo 300", value: "bg-indigo-300" },
    { label: "Indigo 400", value: "bg-indigo-400" },
    { label: "Indigo 500", value: "bg-indigo-500" },
    { label: "Indigo 600", value: "bg-indigo-600" },
    { label: "Indigo 700", value: "bg-indigo-700" },
    { label: "Indigo 800", value: "bg-indigo-800" },
    { label: "Indigo 900", value: "bg-indigo-900" },
    { label: "Purple 100", value: "bg-purple-100" },
    { label: "Purple 200", value: "bg-purple-200" },
    { label: "Purple 300", value: "bg-purple-300" },
    { label: "Purple 400", value: "bg-purple-400" },
    { label: "Purple 500", value: "bg-purple-500" },
    { label: "Purple 600", value: "bg-purple-600" },
    { label: "Purple 700", value: "bg-purple-700" },
    { label: "Purple 800", value: "bg-purple-800" },
    { label: "Purple 900", value: "bg-purple-900" },
    { label: "Pink 100", value: "bg-pink-100" },
    { label: "Pink 200", value: "bg-pink-200" },
    { label: "Pink 300", value: "bg-pink-300" },
    { label: "Pink 400", value: "bg-pink-400" },
    { label: "Pink 500", value: "bg-pink-500" },
    { label: "Pink 600", value: "bg-pink-600" },
    { label: "Pink 700", value: "bg-pink-700" },
    { label: "Pink 800", value: "bg-pink-800" },
    { label: "Pink 900", value: "bg-pink-900" },
  ],
};

export const tailwindTextColors = {
  type: "select",
  options: [
    { label: "Transparent", value: "text-transparent" },
    { label: "Current", value: "text-current" },
    { label: "Black", value: "text-black" },
    { label: "White", value: "text-white" },
    { label: "Gray 100", value: "text-gray-100" },
    { label: "Gray 200", value: "text-gray-200" },
    { label: "Gray 300", value: "text-gray-300" },
    { label: "Gray 400", value: "text-gray-400" },
    { label: "Gray 500", value: "text-gray-500" },
    { label: "Gray 600", value: "text-gray-600" },
    { label: "Gray 700", value: "text-gray-700" },
    { label: "Gray 800", value: "text-gray-800" },
    { label: "Gray 900", value: "text-gray-900" },
    { label: "Red 100", value: "text-red-100" },
    { label: "Red 200", value: "text-red-200" },
    { label: "Red 300", value: "text-red-300" },
    { label: "Red 400", value: "text-red-400" },
    { label: "Red 500", value: "text-red-500" },
    { label: "Red 600", value: "text-red-600" },
    { label: "Red 700", value: "text-red-700" },
    { label: "Red 800", value: "text-red-800" },
    { label: "Red 900", value: "text-red-900" },
    { label: "Orange 100", value: "text-orange-100" },
    { label: "Orange 200", value: "text-orange-200" },
    { label: "Orange 300", value: "text-orange-300" },
    { label: "Orange 400", value: "text-orange-400" },
    { label: "Orange 500", value: "text-orange-500" },
    { label: "Orange 600", value: "text-orange-600" },
    { label: "Orange 700", value: "text-orange-700" },
    { label: "Orange 800", value: "text-orange-800" },
    { label: "Orange 900", value: "text-orange-900" },
    { label: "Yellow 100", value: "text-yellow-100" },
    { label: "Yellow 200", value: "text-yellow-200" },
    { label: "Yellow 300", value: "text-yellow-300" },
    { label: "Yellow 400", value: "text-yellow-400" },
    { label: "Yellow 500", value: "text-yellow-500" },
    { label: "Yellow 600", value: "text-yellow-600" },
    { label: "Yellow 700", value: "text-yellow-700" },
    { label: "Yellow 800", value: "text-yellow-800" },
    { label: "Yellow 900", value: "text-yellow-900" },
    { label: "Green 100", value: "text-green-100" },
    { label: "Green 200", value: "text-green-200" },
    { label: "Green 300", value: "text-green-300" },
    { label: "Green 400", value: "text-green-400" },
    { label: "Green 500", value: "text-green-500" },
    { label: "Green 600", value: "text-green-600" },
    { label: "Green 700", value: "text-green-700" },
    { label: "Green 800", value: "text-green-800" },
    { label: "Green 900", value: "text-green-900" },
    { label: "Teal 100", value: "text-teal-100" },
    { label: "Teal 200", value: "text-teal-200" },
    { label: "Teal 300", value: "text-teal-300" },
    { label: "Teal 400", value: "text-teal-400" },
    { label: "Teal 500", value: "text-teal-500" },
    { label: "Teal 600", value: "text-teal-600" },
    { label: "Teal 700", value: "text-teal-700" },
    { label: "Teal 800", value: "text-teal-800" },
    { label: "Teal 900", value: "text-teal-900" },
    { label: "Blue 100", value: "text-blue-100" },
    { label: "Blue 200", value: "text-blue-200" },
    { label: "Blue 300", value: "text-blue-300" },
    { label: "Blue 400", value: "text-blue-400" },
    { label: "Blue 500", value: "text-blue-500" },
    { label: "Blue 600", value: "text-blue-600" },
    { label: "Blue 700", value: "text-blue-700" },
    { label: "Blue 800", value: "text-blue-800" },
    { label: "Blue 900", value: "text-blue-900" },
    { label: "Indigo 100", value: "text-indigo-100" },
    { label: "Indigo 200", value: "text-indigo-200" },
    { label: "Indigo 300", value: "text-indigo-300" },
    { label: "Indigo 400", value: "text-indigo-400" },
    { label: "Indigo 500", value: "text-indigo-500" },
    { label: "Indigo 600", value: "text-indigo-600" },
    { label: "Indigo 700", value: "text-indigo-700" },
    { label: "Indigo 800", value: "text-indigo-800" },
    { label: "Indigo 900", value: "text-indigo-900" },
    { label: "Purple 100", value: "text-purple-100" },
    { label: "Purple 200", value: "text-purple-200" },
    { label: "Purple 300", value: "text-purple-300" },
    { label: "Purple 400", value: "text-purple-400" },
    { label: "Purple 500", value: "text-purple-500" },
    { label: "Purple 600", value: "text-purple-600" },
    { label: "Purple 700", value: "text-purple-700" },
    { label: "Purple 800", value: "text-purple-800" },
    { label: "Purple 900", value: "text-purple-900" },
    { label: "Pink 100", value: "text-pink-100" },
    { label: "Pink 200", value: "text-pink-200" },
    { label: "Pink 300", value: "text-pink-300" },
    { label: "Pink 400", value: "text-pink-400" },
    { label: "Pink 500", value: "text-pink-500" },
    { label: "Pink 600", value: "text-pink-600" },
    { label: "Pink 700", value: "text-pink-700" },
    { label: "Pink 800", value: "text-pink-800" },
    { label: "Pink 900", value: "text-pink-900" },
  ],
};