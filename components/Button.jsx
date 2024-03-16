const Button = ({ content, changeContent }) => {
  
  const handleChangeContent = (content) => {
    changeContent(content);
  }

  return (
    <button className="button w-32 h-32 bg-gray-800 text-white text-5xl rounded-lg active:bg-gray-300 transition-all hover:ease-in"
    onClick={() => handleChangeContent(content)}
    >
      { content }
    </button>
  )
}

export default Button;