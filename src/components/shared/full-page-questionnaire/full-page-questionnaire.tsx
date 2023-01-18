import classNames from 'classnames';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppPrefix } from '../../../util/app-constants';
import YalsQuestionnaire from '../yals-questionnaire/yals-questionnaire';

const FullPageQuestionnaire = (props: any) => {
  const {} = props;
  const routeParams = useParams();
  const fullPageClasses = classNames({
    [`${AppPrefix}-full-page-questionnaire`]: true
  });

  const [questions, setQuestions] = useState<Array<any>>([]);

  //   useEffect(() => {
  //      const { langId, topicId } = routeParams;

  //     const languageItem = QuestionnaireList.find(
  //       (lng: IQuestionnaireListType) => lng.id === Number(langId)
  //     );

  //     if (languageItem) {
  //       const topic = languageItem.topics.find(
  //         (t: IQuestionnaireTopicType) => t.id === Number(topicId)
  //       );
  //       if (topic) {
  //         setQuestions(() => topic.questions);
  //       }
  //     }
  //   }, [routeParams.langId, routeParams.topicId]);

  return (
    <div className={fullPageClasses}>
      {questions && questions.length > 0 && (
        <YalsQuestionnaire questions={questions} />
      )}
    </div>
  );
};

export default FullPageQuestionnaire;
