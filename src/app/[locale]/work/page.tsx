import { getAllWorks, getTags, getWorks } from '@/api/services/work'
import { TagType, WorkType } from '@/types'

import How from './components/How'
import Vacancies from './components/Vacancies'

const WorkPage = async () => {
  let allWorks: WorkType[] = []
  let allTags: TagType[] = []
  let currentActiveTag: number | null = null
  let allWorksWithTag: WorkType[] = []

  try {
    const allWorksData = await getAllWorks()
    const allTagsData = await getTags()

    allWorks = allWorksData.data ?? []
    allTags = allTagsData.data ?? []

    for (const tag of allTags) {
      const currentTag = allWorks.find(elem => elem.tagId === tag.id)
      if (currentTag) {
        currentActiveTag = currentTag.tagId
        break
      }
    }

    if (currentActiveTag) {
      const responseWorks = await getWorks(currentActiveTag)
      allWorksWithTag = responseWorks.data
    }
  } catch (error) {
    console.log(error)
  }

  return (
    <main>
      <Vacancies
        allWorks={allWorks}
        tags={allTags}
        currentActiveTag={currentActiveTag}
        allWorksWithTag={allWorksWithTag}
      />
      <How />
    </main>
  )
}

export default WorkPage
