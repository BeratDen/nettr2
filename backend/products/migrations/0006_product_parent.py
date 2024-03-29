# Generated by Django 4.1.5 on 2023-01-31 19:17

from django.db import migrations
import django.db.models.deletion
import mptt.fields


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0005_alter_category_options_remove_actor_level_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='parent',
            field=mptt.fields.TreeForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='children', to='products.product'),
        ),
    ]
