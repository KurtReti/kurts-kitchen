import React from 'react'
import uuid from 'react-uuid'

export default function RecipeList({recipe, setActive}) {

  //* map recipe props
  return (
    <div className='flex shrink content-start flex-wrap gap-2 justify-center py-8 min-h-screen'>
        {recipe.map(r => (
            <div className="bg-slate-100 px-2 py-2 border-2 border-black w-96 h-fit flex-col"key={uuid()}>{r}</div>
        ))}
    </div>
  )
}
