import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash2, Plus } from "lucide-react";

export default function DragonPlaylist() {
  const [tracks, setTracks] = useState([
    { title: "Marcha de Sangue", url: "https://example.com/track1.mp3" },
    { title: "Chamas Antigas", url: "https://example.com/track2.mp3" },
  ]);
  const [newTrack, setNewTrack] = useState({ title: "", url: "" });

  const addTrack = () => {
    if (newTrack.title && newTrack.url) {
      setTracks([...tracks, newTrack]);
      setNewTrack({ title: "", url: "" });
    }
  };

  const removeTrack = (index) => {
    setTracks(tracks.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-red-900 text-white p-8 font-serif">
      <h1 className="text-4xl mb-4 text-center text-red-500">Playlist de Sangue e Fogo</h1>

      <Card className="bg-red-950 border border-red-700 p-4 max-w-xl mx-auto shadow-lg rounded-2xl">
        <CardContent>
          <div className="space-y-4">
            {tracks.map((track, index) => (
              <div key={index} className="flex items-center justify-between bg-red-800 p-2 rounded shadow">
                <div>
                  <p className="text-lg font-bold">{track.title}</p>
                  <audio controls src={track.url} className="w-full mt-1" />
                </div>
                <Button
                  variant="destructive"
                  onClick={() => removeTrack(index)}
                  className="ml-4"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}

            <div className="bg-red-900 p-4 rounded mt-6 space-y-2">
              <h2 className="text-xl text-red-400">Adicionar Faixa</h2>
              <Input
                placeholder="Título da música"
                value={newTrack.title}
                onChange={(e) => setNewTrack({ ...newTrack, title: e.target.value })}
                className="bg-black border-red-700"
              />
              <Input
                placeholder="URL da música"
                value={newTrack.url}
                onChange={(e) => setNewTrack({ ...newTrack, url: e.target.value })}
                className="bg-black border-red-700"
              />
              <Button onClick={addTrack} className="bg-red-700 hover:bg-red-600 w-full mt-2">
                <Plus className="h-4 w-4 mr-2" />Adicionar
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
