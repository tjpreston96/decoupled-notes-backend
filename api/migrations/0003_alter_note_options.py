# Generated by Django 4.0.5 on 2022-06-29 23:53

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_alter_note_id'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='note',
            options={'ordering': ['-updated']},
        ),
    ]
