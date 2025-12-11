
const SkillBar = ({skill}) => {
  return (
    <div className='space-y-2'>
      <div className='flex justify-between items-center'>
        <span className='text-lg font-semibold'>{skill.name}</span>
        <span className='text-purple-500'>{skill.level}</span>
      </div>
      <div className='h-3 bg-slate-800 rounded-full overflow-hidden'>
        <div className='h-full bg-linear-to-r from-purple-700 to-blue-400 rounded-full transition-all duration-1000' style={{width: `${skill.level}%`}}>
        </div>
      </div>
    </div>
  )
}

export default SkillBar
