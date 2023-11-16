import React from "react";
import { TextInput, View, Button, TouchableOpacity, Text } from "react-native";
import { Formik, Field } from "formik";

const CommentForm = () => {
  return (
    <Formik
      initialValues={{ comment: "" }}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleSubmit }) => (
        <View>
          <Field
            className="flex flex-col justify-center items-center mb-2 text-sm font-medium text-gray-900 dark:text-white w-full"
            name="comment"
            render={({ field }) => (
              <TextInput
                {...field}
                placeholder="Add your Prediction and analysis in a comment:"
              />
            )}
          />
          <Button title="Submit" />
        </View>
      )}
    </Formik>
  );
};

export default CommentForm;
