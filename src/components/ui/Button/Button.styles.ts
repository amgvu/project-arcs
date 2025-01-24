export const buttonStyles = (disabled: boolean) => {
    const baseStyles =
      'inline-flex items-center gap-2 rounded-md py-1.5 px-3 mb-6 text-sm font-medium shadow-inner shadow-white/10 focus:outline-none transition duration-150 ease-in-out';
  
    const disabledStyles = 'bg-zinc-900 text-zinc-400 cursor-not-allowed';
    const enabledStyles =
      'bg-blue-600 text-zinc-10 hover:bg-blue-300 hover:text-zinc-100 active:bg-zinc-100 active:text-zinc-950';
  
    return `${baseStyles} ${disabled ? disabledStyles : enabledStyles}`;
  };