import { SupportedQuestions } from "./types/SupportedQuestions"
import F1Model from "./models/F1Model"
import F1 from "./services/F1"
import Weather from "./services/Weather"
import { FailCodesMap } from "./types/FailCodesMap"

export default function addRoutes(app: any) {
    app.get('/api', [async (req: any, res: any) => {
        const { question } = req.query
        try {
            let answer: string
            if (question.startsWith(SupportedQuestions.CURRENT_WEATHER))
                answer = await Weather.getCurrent(question)
            else if (question.startsWith(SupportedQuestions.F1_CHAMPION))
                answer = await F1.getChampion(question)
            else
                throw FailCodesMap.QUESTION_NOT_SUPPORTED

            res.send({ answer })
        } catch (e) {
            res.status(e?.statusCode || 400).send(e)
        }
    }])
    return app
}