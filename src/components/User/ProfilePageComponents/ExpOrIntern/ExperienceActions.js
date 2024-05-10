const { default: Button } = require("@/components/UI/Button/Button");
const { default: CustomImage } = require("@/components/UI/Image/Image");

const ExperienceActions = ({
  handleAddExperience,
  handleSubmit,
  FormIsValid,
}) => {
  return (
    <>
      <button
        onClick={handleAddExperience}
        className="flex gap-2 hover:hue-rotate-180 transition-all justify-end"
      >
        <CustomImage
          src="/assets/icons/plus.png"
          alt=""
          width={25}
          height={25}
        />
        <span className="text-orange-500">Add Experience</span>
      </button>
      <Button onClick={handleSubmit} disabled={!FormIsValid}>
        Submit
      </Button>
    </>
  );
};

export default ExperienceActions;
