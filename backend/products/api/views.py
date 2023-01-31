from rest_framework import mixins
from rest_framework.viewsets import ModelViewSet
from rest_framework import permissions
from .serializers import ProductSerializer

from ..models import Product


class ProductViewSet(ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [permissions.AllowAny]
