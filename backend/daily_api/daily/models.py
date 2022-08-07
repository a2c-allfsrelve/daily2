from django.db import models
from markdownx.models import MarkdownxField


#DBを定義する
class Daily(models.Model):
    date = models.DateField()
    univ = MarkdownxField()
    study = MarkdownxField()
    other = MarkdownxField()
    first_meet = MarkdownxField()
    wanna_do = MarkdownxField()
    summary = MarkdownxField()
    evaluation = models.ForeignKey('Evaluation', on_delete=models.PROTECT) #一日の評価は外部キーに
    isOpen = models.BooleanField(default=True) #公開・非公開

    def __str__(self):
        date_str = self.date.strftime('%Y/%m/%d')
        return date_str

class Evaluation(models.Model):
    evaluation = models.CharField(max_length=255)

    def __str__(self):
        return self.evaluation

class Contact(models.Model):
    name = models.CharField(max_length=255, null=True) #追加・お問い合わせ用

    address = models.EmailField(max_length=255, null=True)

    twitter = models.CharField(max_length=16, null=True)

    oshi = models.CharField(max_length=255, null=True)

    contact = models.CharField(max_length=1023, null=True)

    def __str__(self):
        return self.contact