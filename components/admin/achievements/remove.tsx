import { Box, Button, Group, SimpleGrid, TextInput } from '@mantine/core'
import React from 'react'

interface IProps {}

const RemoveAchievement: React.FC<IProps> = () => {
  const [achievement, setAchievement] = React.useState('')
  const [data, setData] = React.useState<any>([])

  const handleSearch = async () => {
    if (!achievement) {
      setData([])
      return
    }
    setData([
      { id: 'adfs', title: 'Achievement Title 1' },
      { id: 'sdffsd', title: 'Achievement Title 2' },
      { id: 'sdfasd', title: 'Achievement Title 3' },
      { id: 'safsdfa', title: 'Achievement Title 4' },
    ])
  }

  const handleRemove = (id: string) => {}

  return (
    <>
      <Group align="flex-end">
        <TextInput
          label="Search achievement by title"
          required
          value={achievement}
          onChange={(e) => setAchievement(e.target.value)}
          sx={{ flex: 1 }}
        />

        <Button onClick={handleSearch}>Search</Button>
      </Group>
      {data.length > 0 && (
        <Group mt={30} direction="column" align="center">
          {data.map((item: any, index: number) => (
            <Group key={index}>
              {/* style this */}
              <Box>{item.title}</Box>

              <Button color="red" onClick={() => handleRemove(item.id)}>
                Remove
              </Button>
            </Group>
          ))}
        </Group>
      )}
    </>
  )
}

export default RemoveAchievement
