from .models import Picture, Post
from rest_framework import serializers


class PictureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Picture
        fields = ('__all__')


class PostSerializer(serializers.ModelSerializer):
    pictures = serializers.SerializerMethodField()

    class Meta:
        model = Post
        fields = ('id', 'name', 'content', 'short_content', 'pictures')

    def get_pictures(self, obj):
        queryset = obj.picture_set.all()
        serializer = PictureSerializer(queryset, many=True)
        return serializer.data
