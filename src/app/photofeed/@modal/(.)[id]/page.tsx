import Image from "next/image";
import { wondersImages, WonderImage } from "../../wonders";
import Modal from "@/components/modal";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function PhotoModal({ params }: Props) {
  // ၁။ Next.js 15/16 အရ params ကို await လုပ်ပါ
  const { id } = await params;

  // ၂။ ID ဖြင့် photo ကို ရှာပါ
  const photo: WonderImage | undefined = wondersImages.find((p) => p.id === id);

  // ၃။ ID မရှိပါက 404 စာမျက်နှာသို့ လွှဲပေးပါ
  if (!photo) {
    notFound();
  }

  return (
    <Modal>
      <Image
        alt={photo.name}
        src={photo.src}
        className="w-full object-cover aspect-square"
      />

      <div className="bg-white p-4">
        <h2 className="text-xl font-semibold">{photo.name}</h2>
        <h3>{photo.photographer}</h3>
        <h3>{photo.location}</h3>
      </div>
    </Modal>
  );
}