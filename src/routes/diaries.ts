import express from 'express';
import * as diaryServices from '../services/diaryServices';
import toNewDiaryEntry from '../utils';

const router = express.Router();

router.get('/', (_req, res) => {
    res.send(diaryServices.getEntriesWithoutSensitiveInfo());
})

router.get('/:id', (req, res) => {
    const diary = diaryServices.findById(Number(req.params.id));

    return (diary)
    ? res.status(200).type('json').send(diary)
    : res.status(404).type('html').send('<h1>The diary entry not exists</h1>');
})

router.post('/', (req, res) => {
    try {
        const newDiaryEntry = toNewDiaryEntry(req.body);
        const createDiaryEntry = diaryServices.addDiary(newDiaryEntry);
     
        if(!createDiaryEntry) {
         res.status(400).json('The entry is empty');
        }
        res.status(200).type('json').json(createDiaryEntry);
    } catch(e:any) {
        res.status(400).send(e.message);
    }
})

export default router;