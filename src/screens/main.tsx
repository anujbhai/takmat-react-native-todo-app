import React, {
  SetStateAction,
  useCallback,
  useState
} from "react";
import {
  Center,
  VStack,
  useColorModeValue,
  Fab,
  Icon
} from "native-base";
import {AntDesign} from "@expo/vector-icons";
import shortid from "shortid";

import AnimatedColorBox from "../components/animated-colorbox";
import ThemeToggle from "../components/theme-toggle";
import TaskList from "../components/task-list";

const initialData = [
  {
    id: shortid.generate(),
    subject: "Buy movie tickets for Friday.",
    done: false,
  },
  {
    id: shortid.generate(),
    subject: "Make a react native demo app.",
    done: false,
  },
];

function MainScreen() {
  const [data, setData] = useState(initialData);
  const [editingItemId, SetEditingItemId] = useState<string | null>(null);

  const handleToggleTaskItem = useCallback((i: any) => {
    setData(prevData => {
      const newData = [...prevData];
      const index = prevData.indexOf(i);

      newData[index] = {
        ...i,
        done: !i.done
      };

      return newData;
    });
  }, []);

  const handleChangeTaskItemSubject = useCallback((i: any, newSubject: any) => {
    setData(prevData => {
      const newData = [...prevData];
      const index = prevData.indexOf(i);

      newData[index] = {
        ...i,
        subject: newSubject
      };

      return newData;
    });
  }, []);

  const handleFinishEditingTaskItem = useCallback((_i: any) => {
    SetEditingItemId(null);
  }, []);

  const handlePressTaskItemLabel = useCallback((i: { id: SetStateAction<string | null> }) => {
    SetEditingItemId(i.id);
  }, []);

  const handleRemoveItem = useCallback((item: {id: SetStateAction<string | null>}) => {
    setData(prevData => {
      const newData = prevData.filter(i => i !== item)

      return newData;
    });
  }, []);

  return (
    <AnimatedColorBox
      flex={1}
      bg={useColorModeValue("warmGray.50", "primary.900")}
      w="full"
    >
      <VStack
        space={5}
        alignItems="center"
        w="full"
      >
        <TaskList
          data={data}
          onToggleItem={handleToggleTaskItem}
          onChangeSubject={handleChangeTaskItemSubject}
          onFinishEditing={handleFinishEditingTaskItem}
          onPressLabel={handlePressTaskItemLabel}
          onRemoveItem={handleRemoveItem}
          editingItemId={editingItemId}
        />

        <ThemeToggle />
      </VStack>
    
      <Fab
        position="absolute"
        renderInPortal={false}
        size="sm"
        icon={<Icon color="white" as={<AntDesign name="plus" />} size="sm" />}
        colorScheme={useColorModeValue("blue", "darkBlue")}
        bg={useColorModeValue("blue.500", "blue.400")}
        onPress={() => {
          const id = shortid.generate();

          setData([
            {
              id,
              subject: "",
              done: false
            },
            ...data
          ]);
          SetEditingItemId(id);
        }}
      />
    </AnimatedColorBox>
  );
}

export default MainScreen;
