import { Pencil, Trash2 } from "lucide-react";

const ArtistTable = ({ artists }) => {

  
  return (
    <div className="bg-[#191C20] border border-[#343942] rounded-2xl overflow-hidden">

      <div className="overflow-x-auto">

        <table className="w-full text-left">

          <thead className="bg-[#22262C] border-b border-[#343942]">

            <tr>

              <th className="px-6 py-4 text-sm text-gray-400">
                #
              </th>

              <th className="px-6 py-4 text-sm text-gray-400">
                Artist
              </th>

              <th className="px-6 py-4 text-sm text-gray-400">
                Songs
              </th>

              <th className="px-6 py-4 text-sm text-gray-400">
                Biography
              </th>

              <th className="px-6 py-4 text-sm text-gray-400 text-right">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {artists.map((artist, index) => (

              <tr
                key={artist.id}
                className="
                  border-b
                  border-[#343942]
                  last:border-none
                  hover:bg-[#22262C]
                  transition
                "
              >

                <td className="px-6 py-5 text-gray-500">
                  {index + 1}
                </td>

                <td className="px-6 py-5">

                  <div className="flex items-center gap-3">

                    <img
                      src={artist.image}
                      alt={artist.name}
                      className="w-11 h-11 rounded-full object-cover"
                    />

                    <span className="font-medium text-white">
                      {artist.name}
                    </span>

                  </div>

                </td>

                <td className="px-6 py-5 text-gray-300">
                  {artist.songs}
                </td>

                <td className="px-6 py-5 text-gray-400 max-w-sm">
                  <p className="truncate">
                    {artist.bio}
                  </p>
                </td>

                <td className="px-6 py-5">

                  <div className="flex justify-end gap-2">

                    <button
                      className="
                        p-2
                        rounded-lg
                        text-blue-400
                        hover:bg-blue-500/10
                      "
                    >
                      <Pencil size={18} />
                    </button>

                    <button
                      className="
                        p-2
                        rounded-lg
                        text-red-400
                        hover:bg-red-500/10
                      "
                    >
                      <Trash2 size={18} />
                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default ArtistTable;