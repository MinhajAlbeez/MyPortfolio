
type SkillTagProps = {
  name: string;
};

const SkillTag = ({ name }: SkillTagProps) => {
  return (
    <div className="bg-[#111] text-white px-5 py-2 rounded-full text-sm inline-block">
      {name}
    </div>
  );
};

export default SkillTag;
