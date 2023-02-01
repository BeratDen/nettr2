from rest_framework import mixins
from rest_framework.viewsets import ModelViewSet, GenericViewSet
from rest_framework import permissions
from .serializers import ProductSerializer, ProductCreateSerializer, CategorySerializer, ActorSerializer

from ..models import Product, Category, Actor


class ProductViewSet(ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [permissions.AllowAny]


class ProductCreateViewSet(mixins.CreateModelMixin, mixins.ListModelMixin, GenericViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductCreateSerializer
    permission_classes = [permissions.AllowAny]


class CategoryViewSet(ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [permissions.AllowAny]


class ActorViewSet(ModelViewSet):
    queryset = Actor.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [permissions.AllowAny]
