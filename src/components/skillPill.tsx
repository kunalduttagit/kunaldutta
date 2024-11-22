export default function SkillPill({skill, className}: {skill: string, className?: string}) {
    return(
        <div className={className}>
            <div className="px-3 py-1 bg-[#222222] text-white dark:bg-[#222222] dark:text-white dark:ring-0 rounded-full">
                {skill}
            </div>
        </div>
    )
}