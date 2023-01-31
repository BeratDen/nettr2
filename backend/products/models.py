from django.db import models
from mptt.models import MPTTModel, TreeManyToManyField, TreeForeignKey
# Create your models here.


class Category(MPTTModel):
    """Model definition for Category."""

    name = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    parent = TreeForeignKey('self', on_delete=models.CASCADE, blank=True, null=True,
                            related_name='children')

    class Meta:
        """Meta definition for Category."""

        verbose_name = 'Category'
        verbose_name_plural = 'Categories'

    class MPTTMeta:
        level_attr = 'mptt_level'
        order_insertion_by = ['name']

    def __str__(self):
        return self.name


class Actor(MPTTModel):
    """Model definition for Actor."""

    name = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    parent = TreeForeignKey('self', on_delete=models.CASCADE, blank=True, null=True,
                            related_name='children')

    class Meta:
        """Meta definition for Actor."""

        verbose_name = 'Actor'
        verbose_name_plural = 'Actors'

    class MPTTMeta:
        level_attr = 'mptt_level'
        order_insertion_by = ['name']

    def __str__(self):
        return self.name


class Product(MPTTModel):
    """Model definition for Product."""

    name = models.CharField(max_length=50)
    descriptions = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    parent = TreeForeignKey('self', on_delete=models.CASCADE,
                            null=True, blank=True, related_name='children')
    category = TreeManyToManyField(Category, verbose_name=(
        "category"), related_name='category')
    actor = TreeManyToManyField(Actor, verbose_name=(
        "actor"), related_name='actor')

    class Meta:
        """Meta definition for Product."""

        verbose_name = 'Product'
        verbose_name_plural = 'Products'

    def __str__(self):
        return self.name
